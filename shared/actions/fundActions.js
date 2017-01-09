import * as FundsActionTypes from '../actiontypes/fundsActionTypes';
let nextTodoId = 5;
export const addFund = (name,holdings) => {
  return {
    type: FundsActionTypes.ADD_FUND,
    name,
    id:nextTodoId++,
    holdings
  };
};

export const editFund = (name, fundId) => {
  return {
    type: FundsActionTypes.EDIT_FUND,
    name,
    fundId,
  };
};
export const removeFund = index => {
  return {
    type: FundsActionTypes.REMOVE_FUND,
    index
  };
};


export const sortColumn = (key, fundId) => {
  return {
    type: FundsActionTypes.SORT_COLUMN,
    key,
    fundId
  };
};
