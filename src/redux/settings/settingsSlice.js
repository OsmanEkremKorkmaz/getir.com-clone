import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: false,
  lang: "tr"
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
    setLang: (state, action) => {
        state.lang = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setLang } = settingsSlice.actions

export default settingsSlice.reducer