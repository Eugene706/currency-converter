export interface ICurrencyTypeReponse {
  currency_code: string;
}

export interface ICurrency {
  firstCurr: string;
  secondCurr: string;
}

export interface ICurrencyType {
  loading: boolean;
  currency: string;
}

export enum CurrencyTypeActionsTypes {
  SET_DEFINE_CURRENCY = 'SET_DEFINE_CURRENCY',
}

export interface ICurrencyDefineAction {
  type: CurrencyTypeActionsTypes.SET_DEFINE_CURRENCY;
  payload: string;
}
