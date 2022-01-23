export interface ICurrencyResponse {
  base_ccy: string;
  buy: string;
  ccy: string;
  sale: string;
}

export interface ICurrency {
  currencies: ICurrencyResponse[];
  chosenCurrency: string;
}

export enum CurrencyActionsTypes {
  SET_CURRENCY = 'SET_CURRENCY',
  SET_CHOSEN_CURRENCY = 'SET_CHOSEN_CURRENCY',
}

export interface ISetCurrencyAction {
  type: CurrencyActionsTypes.SET_CURRENCY;
  payload: ICurrencyResponse[];
}

export interface IChosenCurrencyAction {
  type: CurrencyActionsTypes.SET_CHOSEN_CURRENCY;
  payload: string;
}

export type CurrencyAction = ISetCurrencyAction | IChosenCurrencyAction;
