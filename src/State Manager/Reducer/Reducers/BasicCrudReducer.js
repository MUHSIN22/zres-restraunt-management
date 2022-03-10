import ACTION_TYPES from "../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  dataList: [],
};

const BasicCrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        dataList: action.payload,
      };

    default:
      return state;
  }
};

export default BasicCrudReducer;
