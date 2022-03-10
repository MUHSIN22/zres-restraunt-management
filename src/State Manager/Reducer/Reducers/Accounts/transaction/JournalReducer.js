import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";

const initialState = {
  journalList: [],
  filteredList: [],
};

const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        journalList: action.payload,
      };

    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        filteredList: action.payload,
      };

    case ACTION_TYPES.CREATE:
      return {
        ...state,
        journalList: [...state.journalList, action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        journalList: state.journalList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        journalList: state.journalList.filter((x) => x.id != action.payload),
      };
    default:
      return state;
  }
};
export default journalReducer;
