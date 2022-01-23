import { CurrencyTypeActionsTypes, ICurrencyDefineAction } from '../../types/currencyType';

export const defineCurrency = (currency: string): ICurrencyDefineAction => ({
  type: CurrencyTypeActionsTypes.SET_DEFINE_CURRENCY,
  payload: currency,
});
