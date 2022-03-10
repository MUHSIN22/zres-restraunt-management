import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";
const initialState = {
  TaxList: [],
};

const TaxMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        TaxList: action.payload,
      };

    case ACTION_TYPES.CREATE:
      return {
        ...state,
        TaxList: [...state.TaxList, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        TaxList: state.TaxList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        TaxList: state.TaxList.filter((x) => x.id != action.payload),
      };

    default:
      return state;
  }
};

export default TaxMasterReducer;
