import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./reducers/index";

export default configureStore({
    reducer: {
        customers: customersReducer,
    },
});