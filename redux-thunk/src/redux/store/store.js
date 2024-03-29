import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "../reducers/RootReducer";

const store = configureStore({
	reducer: reducers,
	middleware: [thunk],
	devTools: true
})

export default store;