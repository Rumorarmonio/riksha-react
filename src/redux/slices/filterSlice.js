import {createSlice} from '@reduxjs/toolkit'

// TODO: store search value in redux
const initialState = {
    categoryId: 0,
    currentPage: 1,
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
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }
})

export const {setCategoryId, setSort, setCurrentPage} = filterSlice.actions
export default filterSlice.reducer
