import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

export const fetchAll = () => (dispatch) => {
  Api.JournalApi()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const searchByDate = (fromDate, toDate, onSuccess) => (dispatch) => {
  Api.JournalApi()
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

export const create = (data, onSuccess) => (dispatch) => {
  Api.JournalApi()
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const update = (id, data, onSuccess) => (dispatch) => {
  Api.JournalApi()
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
  Api.JournalApi()
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
