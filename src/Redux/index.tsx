import { createStore, combineReducers } from "redux";

import { GlobalReducer } from "./Global";
import { ResumeReducer } from "./Resume";

const reducers = {
  global: GlobalReducer,
  resume: ResumeReducer,
};

/**
 * Representa o estado global da aplicação, cada chave aponta para o retorno de um reducer
 */
export type AppState = {
  [T in keyof typeof reducers]: ReturnType<typeof reducers[T]>;
};

const store = createStore(combineReducers<AppState>(reducers));

export default store;
