import Api from "../../../api manager/Api";
import ACTION_TYPES from "../../ActionTypes/Basic Crud operation/ActionType";
// to take the entire data in api
export const fetchAll = () => (dispatch) => {
  Api.basicCrud()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const create = (data, onSuccess) => (dispatch) => {
//   data = formateData(data);
//   Api.basicCrud()
//     .create(data)
//     .then((res) => {
//       dispatch({
//         type: ACTION_TYPES.CREATE,
//         payload: res.data,
//       });
//       onSuccess();
//     })
//     .catch((err) => console.log(err));
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const update = (id, data, onSuccess) => (dispatch) => {
//   data = formateData(data);
//   Api.basicCrud()
//     .update(id, data)
//     .then((res) => {
//       dispatch({
//         type: ACTION_TYPES.UPDATE,
//         payload: { id, ...data },
//       });
//       onSuccess();
//     })
//     .catch((err) => console.log(err));
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const Delete = (id, onSuccess) => (dispatch) => {
//   Api.basicCrud()
//     .delete(id)
//     .then((res) => {
//       dispatch({
//         type: ACTION_TYPES.DELETE,
//         payload: id,
//       });
//       onSuccess();
//     })
//     .catch((err) => console.log(err));
// };
