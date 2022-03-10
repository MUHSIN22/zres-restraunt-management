import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

export const fetchAll = () => (dispatch) => {
  Api.ContraApi()
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
  Api.ContraApi()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const searchByDate = (fromDate, toDate, onSuccess) => (dispatch) => {
  Api.ContraApi()
    .searchData(fromDate, toDate)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.SEARCH,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const update = (id, data, onSuccess) => (dispatch) => {
  Api.ContraApi()
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
  Api.ContraApi()
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
