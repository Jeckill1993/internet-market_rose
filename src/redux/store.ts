import { createStore, combineReducers } from 'redux';

import modalReducer from "./reducers/modalReducer";
import boardSettingReducer from "./reducers/boardSettingReducer";
import menusReducer from "./reducers/menusReducer";

const rootReducer = combineReducers({
    modals: modalReducer,
    boardSettings: boardSettingReducer,
    menus: menusReducer,
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;