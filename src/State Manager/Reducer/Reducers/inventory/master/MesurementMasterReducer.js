import ACTION_TYPES from "../../../../ActionTypes/Basic Crud operation/ActionType";
const initialState = {
  MesurementList: [],
};

const MesurementMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        MesurementList: action.payload,
      };

    case ACTION_TYPES.CREATE:
      return {
        ...state,
        MesurementList: [...state.MesurementList, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        MesurementList: state.MesurementList.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        MesurementList: state.MesurementList.filter(
          (x) => x.id != action.payload
        ),
      };

    default:
      return state;
  }
};

export default MesurementMasterReducer;
