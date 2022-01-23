import { CurrencyAction, CurrencyActionsTypes, ICurrency } from '../../types/currency';

const initialState: ICurrency = {
  currencies: [],
  chosenCurrency: '',
};

const currency = (state = initialState, action: CurrencyAction): ICurrency => {
  switch (action.type) {
    case CurrencyActionsTypes.SET_CURRENCY:
      return {
        ...state,
        currencies: action.payload,
      };
    case CurrencyActionsTypes.SET_CHOSEN_CURRENCY:
      return {
        ...state,
        chosenCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default currency;
