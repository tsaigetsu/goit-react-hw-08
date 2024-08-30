import { createAsyncThunk } from "@reduxjs/toolkit"
import { goitApi } from "../../goitApi";


export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkApi) => {
    try {
        const { data } = await goitApi.get('contacts')
        return data;        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactsThunk = createAsyncThunk('addContact', async (body, thunkApi) => {
    try {
        const {data} = await goitApi.post('contacts', body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkApi)=> {
    try {
        await goitApi.delete(`contacts/${id}`)
        return id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})