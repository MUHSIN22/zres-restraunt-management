import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";
const initialState = {
  productDetailsList: [],
};

const productMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        productDetailsList: action.payload,
      };

    case ACTION_TYPES.CREATE:
      return {
        ...state,
        productDetailsList: [...state, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        productDetailsList: state.productDetailsList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        productDetailsList: state.productDetailsList.filter(
          (x) => x.id != action.payload
        ),
      };

    default:
      return state;
  }
};

export default productMasterReducer;
