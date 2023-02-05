import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth';
import booksReducer from './books';

const store = configureStore({
    reducer: { auth: authReducer, books: booksReducer},
});

export default store;