import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customer';

const initialState = {
    customers: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

// get customer
export const getCustomers = createAsyncThunk(
    'customers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('get not working')
        }
    }
);

// create a customer
export const createCustomer = createAsyncThunk(
    'new-customer',
    async (customerData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-customer", customerData);
            console.log(response.data, 'This is response.data on new-customer')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('create not working')
        }
    }
);

// edit a customer
export const editCustomer = createAsyncThunk(
    'edit-customer',
    async (sentToRedux, thunkAPI) => {
        try {
            console.log(sentToRedux)
            const response = await axios.put(API_URL + "/edit-customer/" + sentToRedux.id,
                { message: sentToRedux.message });
            getCustomers()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('edit not working');
        }
    }
);


// delete customer
export const deleteCustomer = createAsyncThunk(
    'customer/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + id);
            getCustomers()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('delete not working');
        }
    }
);



const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCustomer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCustomer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.customers.push(action.payload);
            })
            .addCase(createCustomer.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getCustomers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCustomers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.customers = action.payload;
            })
            .addCase(getCustomers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteCustomer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.customers.findIndex((customer) => customer._id === action.payload._id)
                state.customers.splice(index, 1)
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editCustomer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editCustomer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.customers.findIndex((customer) => customer._id === action.payload._id)
                // console.log(action.payload)
                console.log('splice', state.customers.splice(index, 1, action.payload))
                state.customers.splice(index, 1, action.payload);
            })
            .addCase(editCustomer.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

console.log(customerSlice);

export default customerSlice.reducer;
export const { reset } = customerSlice.actions;