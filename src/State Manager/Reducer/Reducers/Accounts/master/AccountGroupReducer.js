import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  accountGroupList: [],
};

const AccountGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        accountGroupList: action.payload,
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        accountGroupList: [...state.accountGroupList, action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        accountGroupList: state.accountGroupList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        accountGroupList: state.accountGroupList.filter(
          (x) => x.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default AccountGroupReducer;
