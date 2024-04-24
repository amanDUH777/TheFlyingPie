import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menu';

const initialState = {
    menus: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

// get menus
export const getMenus = createAsyncThunk(
    'menus',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (error) {
            console.log('broken')
            return thunkAPI.rejectWithValue('get not working')
        }
    }
);

// create a menu
export const createMenu = createAsyncThunk(
    'new-menu',
    async (menuData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-menu", menuData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('create not working')
        }
    }
);

// edit menu
export const editMenu = createAsyncThunk(
    'menus/edit',
    async (sentToRedux, thunkAPI) => {
        try {
            console.log(sentToRedux)
            const response = await axios.put(API_URL + "/edit-menu/" + sentToRedux.id,
                { title: sentToRedux.title });
            getMenus()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('edit not working');
        }
    }
);


// delete menu
export const deleteMenu = createAsyncThunk(
    'menus/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + id);
            getMenus()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('delete not working');
        }
    }
);

// add comment
export const addComment = createAsyncThunk(
    'menus/add-comment',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + '/add-comment/' + sentToRedux.id,
                { comment: sentToRedux.newComments });
            getMenus()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('add comment not working')
        }
    }
)


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.menus.push(action.payload);
            })
            .addCase(createMenu.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getMenus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMenus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.menus = action.payload;
            })
            .addCase(getMenus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteMenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.menus.findIndex((menu) => menu._id === action.payload._id)
                state.menus.splice(index, 1)

            })
            .addCase(deleteMenu.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editMenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.menus.findIndex((menu) => menu._id === action.payload._id)
                // console.log(action.payload)
                console.log('splice', state.menus.splice(index, 1, action.payload))
                state.menus.splice(index, 1, action.payload);
            })
            .addCase(editMenu.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.menus.findIndex((menu) => menu._id === action.payload._id)
                // state.Menus.comment.push(action.payload)
                state.menus.splice(index, 1, action.payload)
                // console.log(state.Menus.comment, 'state.comment')
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

console.log(menuSlice);

export default menuSlice.reducer;
export const { reset } = menuSlice.actions;