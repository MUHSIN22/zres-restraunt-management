import { combineReducers } from "redux";
import BasicCrudReducer from "./Reducers/BasicCrudReducer";
import productMasterReducer from "./Reducers/inventory/master/ProductMasterReducer";
import AccountGroupReducer from "./Reducers/Accounts/master/AccountGroupReducer";
import journalReducer from "./Reducers/Accounts/transaction/JournalReducer";
import contraReducer from "./Reducers/Accounts/transaction/ContraReducer";
import CategoryMasterReducer from "./Reducers/inventory/master/CategoryMaster";
import TaxMasterReducer from "./Reducers/inventory/master/TaxMaster";
import MesurementMasterReducer from "./Reducers/inventory/master/MesurementMasterReducer";
export const reducerHub = combineReducers({
  BasicCrudReducer,
  productMasterReducer,
  AccountGroupReducer,
  journalReducer,
  contraReducer,
  CategoryMasterReducer,
  TaxMasterReducer,
  MesurementMasterReducer,
});
