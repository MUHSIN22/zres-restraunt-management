import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  LedgerList: [],
  filteredList: [],
};

const ledgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        LedgerList: action.payload,
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        LedgerList: [...state.LedgerList, action.payload],
      };
    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        filteredList: action.payload,
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        LedgerList: state.LedgerList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    default:
      return state;
  }
};
export default ledgerReducer;
