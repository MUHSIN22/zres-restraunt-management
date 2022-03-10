import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  accountHeadList: [],
};

const AccountHeadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        accountHeadList: action.payload,
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        accountHeadList: [...state.accountHeadList, action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        accountHeadList: state.accountHeadList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        accountHeadList: state.accountHeadList.filter(
          (x) => x.AccountHeadID != action.payload
        ),
      };
    default:
      return state;
  }
};

export default AccountHeadReducer;
