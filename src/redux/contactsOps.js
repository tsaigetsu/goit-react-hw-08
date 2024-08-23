import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://66b63809b5ae2d11eb66480e.mockapi.io/'

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkApi) => {
    try {
        const {data} = await axios.get('contacts')
        console.log(data);
        return data;        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactsThunk = createAsyncThunk('addContact', async (body, thunkApi) => {
    try {
        const {data} = await axios.post('contacts', body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkApi)=> {
    try {
        await axios.delete(`contacts/${id}`)
        return id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})