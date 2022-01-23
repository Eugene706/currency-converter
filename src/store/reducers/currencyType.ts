import { CurrencyTypeActionsTypes, ICurrencyType, ICurrencyDefineAction } from '../../types/currencyType';

const initialState: ICurrencyType = {
  loading: true,
  currency: '',
};

const currencyType = (state = initialState, action: ICurrencyDefineAction): ICurrencyType => {
  switch (action.type) {
    case CurrencyTypeActionsTypes.SET_DEFINE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default currencyType;
