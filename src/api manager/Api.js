import axios from "axios";

const baseUrl = "https://zres.clubsoft.co.in";
//zres.clubsoft.co.in/AccountGroup
export default {
  basicCrud(url = baseUrl) {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
  // INVENTORY API
  // productmasterApi

  ProductMasterApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/INVT_Product?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  // category master

  CategoryMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/Category?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post("/api/v1/Category?CMPid=1", newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  // tax master

  TaxMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/UOM?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post("/api/v1/UOM?CMPid=1", newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  // Measurement master

  MesurementMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/UOM?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post("/api/v1/UOM?CMPid=1", newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  // ACCOUNT API

  // account group
  AccountGroupApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/AccountGroup?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post("/api/v1/AccountGroup?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(
          "https://zres.clubsoft.co.in/api/v1/AccountGroup?" + id,
          updateRecord
        ),
      delete: (id) =>
        axios.delete("/api/v1/AccountGroup/DeleteAccountGroup?CMPid=1", id),
    };
  },

  // ACCOUTN >> TRANSACTION >> JOURNAL

  JournalApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/Journal?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post("/api/v1/Journal?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put("/api/v1/Journal?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete("/api/v1/Journal?CMPid=1", id),
    };
  },

  // ACCOUTN >> TRANSACTION >> CONTRA

  ContraApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get("/api/v1/Contra?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post("/api/v1/Contra?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put("/api/v1/Contra?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete("/api/v1/Contra?CMPid=1", id),
    };
  },
};

// basicCrud(url = baseUrl + "dcandidate/")
