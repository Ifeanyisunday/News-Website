import { configureStore } from "@reduxjs/toolkit";
import Newsapi from './Newsapi'



export const store = configureStore({
    reducer:{
        [Newsapi.reducerPath]: Newsapi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Newsapi.middleware)
})

export default store