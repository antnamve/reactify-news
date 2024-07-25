import { newsApi } from '@/entities/news/api/newsApi'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[newsApi.reducerPath]: newsApi.reducer,
})
