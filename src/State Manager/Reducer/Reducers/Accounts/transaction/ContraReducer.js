import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  ContraList: [],
  filteredList: [],
};

const contraReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        ContraList: action.payload,
      };

    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        filteredList: action.payload,
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        ContraList: [...state.ContraList, action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        ContraList: state.ContraList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        ContraList: state.ContraList.filter((x) => x.id != action.payload),
      };
    default:
      return state;
  }
};
export default contraReducer;
