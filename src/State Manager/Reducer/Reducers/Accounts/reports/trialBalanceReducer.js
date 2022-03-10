import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  filteredList: [],
};

const trialBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        filteredList: action.payload,
      };
    default:
      return state;
  }
};
export default trialBalanceReducer;
