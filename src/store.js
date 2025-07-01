import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import slices
import { employeesSlice } from "./features/employees/slices/employeesSlice";
import { uiSlice } from "./features/core/";

const persistConfig = {
  key: "root",
  storage,
};

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  employees: employeesSlice.reducer,
  ui: uiSlice.reducer,
});

// Wrap the root reducer with persistReducer to enable state persistence in localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Configure middleware to ignore redux-persist actions in serializable checks
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor, which will synchronize the Redux store with localStorage
export const persistor = persistStore(store);

export default store;
