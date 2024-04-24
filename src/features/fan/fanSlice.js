import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/fan';

const initialState = {
    fans: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

// get fans
export const getFans = createAsyncThunk(
    'fans',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('get not working')
        }
    }
);

// create a fan
export const createFan = createAsyncThunk(
    'new-fan',
    async (fanData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-fan", fanData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('create not working')
        }
    }
);

// edit a fan
export const editFan = createAsyncThunk(
    'fans/edit',
    async (sentToRedux, thunkAPI) => {
        try {
            console.log(sentToRedux)
            const response = await axios.put(API_URL + "/edit-fan/" + sentToRedux.id,
                { message: sentToRedux.message });
            getFans()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('edit not working');
        }
    }
);


// delete fan
export const deleteFan = createAsyncThunk(
    'fans/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + id);
            getFans()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('delete not working');
        }
    }
);

// add comment
export const addComment = createAsyncThunk(
    'fans/add-comment',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + '/add-comment/' + sentToRedux.id,
                { comment: sentToRedux.newComments });
            getFans()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('add comment not working')
        }
    }
)


const fanSlice = createSlice({
    name: 'fan',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createFan.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createFan.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.fans.push(action.payload);
            })
            .addCase(createFan.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getFans.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFans.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.fans = action.payload;
            })
            .addCase(getFans.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteFan.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteFan.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.fans.findIndex((fan) => fan._id === action.payload._id)
                state.fans.splice(index, 1)
            })
            .addCase(deleteFan.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editFan.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editFan.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.fans.findIndex((fan) => fan._id === action.payload._id)
                // console.log(action.payload)
                console.log('splice', state.fans.splice(index, 1, action.payload))
                state.fans.splice(index, 1, action.payload);
            })
            .addCase(editFan.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.fans.findIndex((fan) => fan._id === action.payload._id)
                // state.fans.comment.push(action.payload)
                state.fans.splice(index, 1, action.payload)
                // console.log(state.fans.comment, 'state.comment')
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

console.log(fanSlice);

export default fanSlice.reducer;
export const { reset } = fanSlice.actions;