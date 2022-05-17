import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settings/settingsSlice'

export default configureStore({
  reducer: {
      settings: settingsSlice
  },
})