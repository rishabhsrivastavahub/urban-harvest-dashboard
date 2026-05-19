import { createSlice } from '@reduxjs/toolkit'
import { products, recentOrders } from '../../data/mockData.js'

const initialState = {
  products,
  orders: recentOrders,
  searchQuery: '',
  statusFilter: 'All',
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload
    },
    addProduct(state, action) {
      state.products.push(action.payload)
    },
  },
})

export const { setSearchQuery, setStatusFilter, addProduct } = productSlice.actions
export default productSlice.reducer
