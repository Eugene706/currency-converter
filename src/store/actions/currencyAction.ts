import { CurrencyActionsTypes, IChosenCurrencyAction, ICurrencyResponse, ISetCurrencyAction } from '../../types/currency';

export const setCurrencies = (currencies: ICurrencyResponse[]): ISetCurrencyAction => ({
  type: CurrencyActionsTypes.SET_CURRENCY,
  payload: currencies,
});

export const setChosenCurrency = (chosenCurrency: string): IChosenCurrencyAction => ({
  type: CurrencyActionsTypes.SET_CHOSEN_CURRENCY,
  payload: chosenCurrency,
});
