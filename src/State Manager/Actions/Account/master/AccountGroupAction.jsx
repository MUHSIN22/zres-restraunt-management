import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

export const fetchAll = () => (dispatch) => {
  Api.AccountGroupApi()
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
  Api.AccountGroupApi()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log("THE ERROR OCCURE IN ACTION", err));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const update = (id, data, onSuccess) => (dispatch) => {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  Api.AccountGroupApi()
    .update(id, requestOptions)
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
  Api.AccountGroupApi()
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
