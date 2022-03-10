import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

export const fetchAll = (fromdate, todate, onSuccess) => (dispatch) => {
  Api.LedgerApi()
    .fetchAll(fromdate, todate)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const searchByDate =
  (fromDate, toDate, accountNameId, onSuccess) => (dispatch) => {
    Api.LedgerApi()
      .searchData(fromDate, toDate, accountNameId)
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
  Api.LedgerApi()
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
  Api.LedgerApi()
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
  Api.LedgerApi()
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
