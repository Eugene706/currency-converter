import { combineReducers } from 'redux';
import currency from './currency';
import currencyType from './currencyType';

export const rootReducer = combineReducers({ currencyType, currency });

export type RootState = ReturnType<typeof rootReducer>;
