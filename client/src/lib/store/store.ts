import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import trendParamsReducer from "./trendParamsSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['trendParams'],
  };
  
  const rootReducer = combineReducers({
    trendParams: trendParamsReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  const persistor = persistStore(store);
  export type RootState = ReturnType<typeof rootReducer>;
  export { store, persistor };