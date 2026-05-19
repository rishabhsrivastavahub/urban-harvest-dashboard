import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload
      state.status = 'authenticated'
    },
    logout(state) {
      state.user = null
      state.status = 'idle'
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
