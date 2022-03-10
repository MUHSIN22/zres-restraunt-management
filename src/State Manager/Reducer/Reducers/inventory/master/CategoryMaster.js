import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";
const initialState = {
  CategoryList: [],
};

const CategoryMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        CategoryList: action.payload,
      };

    case ACTION_TYPES.CREATE:
      return {
        ...state,
        CategoryList: [...state.CategoryList, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        CategoryList: state.CategoryList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        CategoryList: state.CategoryList.filter((x) => x.id != action.payload),
      };

    default:
      return state;
  }
};

export default CategoryMasterReducer;
