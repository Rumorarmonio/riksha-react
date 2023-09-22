import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sortType: {
        name: 'По умолчанию',
        sortProperty: ''
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log('action setCategoryId', action)
            state.categiryId = action.payload
        },
        setSort(state, action) {
            state.sortType = action.payload
        }
    }
})

export const {setCategoryId, setSort} = filterSlice.actions
export default filterSlice.reducer
