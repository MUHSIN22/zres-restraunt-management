import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

// GETTING ALL DATA

export const fetchAll = () => (dispatch) => {
  Api.MesurementMasterAPi()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  Api.MesurementMasterAPi()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log("ERROR OCCURE IN ACTIONS", err));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const update = (id, data, onSuccess) => (dispatch) => {
  Api.MesurementMasterAPi()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Delete = (id, onSuccess) => (dispatch) => {
  Api.MesurementMasterAPi()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
