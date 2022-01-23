import * as currencyTypeActionCreators from './currencyTypeAction';
import * as currencyActionCreators from './currencyAction';

const Actions = {
  ...currencyTypeActionCreators,
  ...currencyActionCreators,
};

export default Actions;
