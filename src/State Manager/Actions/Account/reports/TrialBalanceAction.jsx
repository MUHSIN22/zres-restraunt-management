import Api from "../../../../api manager/Api";
import ACTION_TYPES from "../../../ActionTypes/Basic Crud operation/ActionType";

export const searchByDate = (fromDate, toDate, onSuccess) => (dispatch) => {
  Api.TrialBalanceApi()
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
