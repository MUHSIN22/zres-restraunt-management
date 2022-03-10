import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import "./journals.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import * as actions from "../../../../State Manager/Actions/Account/Transactions/journalAction";
import { connect } from "react-redux";

import FailSnackbars from "../../../basic components/failSnackBar";
import SucessSnackbars from "../../../basic components/sucessSidePopup";
function Journals({
  journalData,
  CreateJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
  fetchJournalEntry,
  searchJournalEntry,
  filterData,
}) {
  const dataJournal = {
    JEntryDate: "",
    DebitAccountId: "",
    CreditAccountId: "",
    JRefNo: "",
    JCredit: 0,
    JNarration: "",
    JDebit: 0,
    FinancialYearID: 1,
    CMPid: 1,
    UserID: 1,
    DebitAccountName: null,
    CreditAccountName: null,
    DebitaccName: null,
    CreditaccName: null,
    AccountName: null,
    ledgerName: null,
  };

  const [newJournal, setNewJournal] = useState(false);
  const [entryDate, setEntryDate] = useState(new Date());
  const [dataJournalToSend, setDataJournalToSend] = useState(dataJournal);
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [edit, setEdit] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const [loading, setloading] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [editData, setEditData] = useState({});
  const [debitCredit, setDebitCredit] = useState(0);
  const [dropdownList, setDropdownList] = useState([]);
  const [editTableSelectedID, setEditTableSelctedID] = useState(0);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);
  const [sucessAdded, setSucessAdded] = useState(true);
  const [snackBarOpen, setSnackbarOpen] = useState(true);

  const handleFilterByData = () => {
    const fromdate = moment(startDate).format("MM-DD-YYYY").toString();
    const todate = moment(toDate).format("MM-DD-YYYY").toString();
    console.log("fromdate:", fromdate, ",", "todate:", todate);
    searchJournalEntry(fromdate, todate, () => {
      window.alert("sucess filter");
      filterData();
    });
  };

  const handleDataInput = (e) => {
    const value = e.target.value;

    setDataJournalToSend({
      ...dataJournalToSend,
      [e.target.name]: value,
      JCredit: debitCredit,
      JDebit: debitCredit,
    });
  };

  const getAccountType = () => {
    const url = "http://localhost:5000/api/v1/Journal/GetAccountHeadName";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((listsFromServer) => {
        setDropdownList(listsFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAccountType();
  });

  useEffect(() => {
    fetchJournalEntry();
  }, []);

  useEffect(() => {
    if (filterData?.length === 0) {
      setloading(true);
      console.log("loadingg.........................");
    } else if (filterData?.length > 0) {
      setloading(false);
      console.log("loading compleated");
      setDataFromServer(filterData);
    } else {
    }
  }, [filterData]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const handleNewJournal = () => {
    setNewJournal(true);
    setDebitCredit(0);
    setDataJournalToSend(dataJournal);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setToDate(null);
  };

  const handleToDate = (date) => {
    setToDate(date);
  };

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    setFailSnackBar(false);
    setSucessSnackBar(false);
    console.log("THE DATA", dataJournalToSend);
    if (editTableSelectedID <= 0) {
      CreateJournalEntry(dataJournalToSend, () => {
        window.alert("sucess");
        setSucessSnackBar(true);
        setMessageToPass("Sucessfully Added");
        setSnackbarOpen(true);

        filterData();
      });
      fetchJournalEntry();
      setDataJournalToSend(dataJournal);
    } else {
      updateJournalEntry(editTableSelectedID, dataJournalToSend, () => {
        setSucessSnackBar(true);
        setMessageToPass("Sucessfully Updated");
        setSnackbarOpen(true);
        fetchJournalEntry();
        filterData();
        setDataJournalToSend(dataJournal);
      });
    }
  };

  const handleClearALL = () => {
    setDataJournalToSend(dataJournal);
    setDebitCredit(0);
  };

  const handleEditOptions = (id) => {
    setEditTableSelctedID(id);
    const newdata = journalData.find((x) => x.EntryNo === id);
    setDataJournalToSend(newdata);
    setDebitCredit(newdata?.JCredit);
    setNewJournal(true);
    setEdit(true);
  };

  const handleExitfun = () => {
    setEdit(false);
    setNewJournal(false);
    setDataJournalToSend(dataJournal);
  };

  return (
    <>
      {failSnackbar && (
        <FailSnackbars
          MessageToPass={messageToPass}
          open={snackBarOpen}
          setOpen={setSnackbarOpen}
        />
      )}
      {sucessSnackbar && (
        <SucessSnackbars
          MessageToPass={messageToPass}
          open={snackBarOpen}
          setOpen={setSnackbarOpen}
        />
      )}

      <div className="Journals">
        <div className="top__header___Section">
          <h2>Journal</h2>
        </div>

        <div className="date__Search__section">
          <div className="input__date___section">
            <DatePicker
              selected={startDate}
              onChange={(date) => handleStartDate(date)}
              dateFormat={"dd/MM/yyyy"}
              isClearable
              placeholderText="from date"
            />
            <DatePicker
              selected={toDate}
              onChange={(date) => handleToDate(date)}
              dateFormat={"dd/MM/yyyy"}
              minDate={startDate}
              isClearable
              placeholderText="to date"
            />
          </div>

          <div className="search__Section">
            <button type="button" onClick={handleFilterByData}>
              Search
            </button>
          </div>
        </div>
        <div className="journal__container">
          <div className="journal__left__section">
            <div className="left__top__section">
              <input type="text" />
            </div>

            <div className="left__bottom__section">
              <div className="table__sections">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ref No</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFromServer.map((data) => (
                      <tr onClick={() => handleEditOptions(data.EntryNo)}>
                        <td>{data.JRefNo}</td>
                        <td>{data.JEntryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="journal__right__section">
            <form onSubmit={handleJournalSubmit}>
              <div className="right__top__section">
                <div className="input__section__container__top">
                  {/* <div className="input__sections">
                    <h5>Entry No</h5>
                    <input
                      name="EntryNo"
                      value={dataJournalToSend.EntryNo}
                      onChange={handleDataInput}
                      type="text"
                      disabled
                      style={{ boxShadow: "0 0 10px grey" }}
                    />
                  </div> */}

                  <div className="input__sections">
                    <h5>Entry Data</h5>
                    <input
                      style={{ marginRight: "35px" }}
                      type="datetime-local"
                      name="JEntryDate"
                      value={dataJournalToSend.JEntryDate}
                      onChange={handleDataInput}
                    />
                  </div>
                </div>
                <div className="input__section__container__bottom">
                  <div className="input__sections">
                    <h5>Ref No</h5>
                    <input
                      required
                      name="JRefNo"
                      value={dataJournalToSend.JRefNo}
                      onChange={handleDataInput}
                      type="text"
                    />
                  </div>

                  <div className="input__sections">
                    <h5>Narration</h5>
                    <input
                      name="JNarration"
                      value={dataJournalToSend.JNarration}
                      onChange={handleDataInput}
                      type="text"
                      style={{ width: "150px", marginRight: "130px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="right__mid__section">
                <div className="table__sections">
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          style={{ backgroundColor: "#a09ebd", width: "40px" }}
                        ></th>
                        <th>Debit Account Name</th>
                        <th>Credit Account Name</th>

                        <th>Debit</th>
                        <th>Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newJournal && (
                        <>
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#cdccdd",
                                width: "40px",
                              }}
                            ></td>

                            {/* debit */}
                            <td>
                              {" "}
                              <select
                                name="DebitAccountId"
                                value={dataJournalToSend.DebitAccountId}
                                onChange={handleDataInput}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                              >
                                <option value="" disabled selected>
                                  Pic Account Type
                                </option>
                                {dropdownList?.map((list) => (
                                  <option value={list.Value}>
                                    {list.Text}
                                  </option>
                                ))}
                              </select>{" "}
                            </td>

                            {/* credit */}

                            <td>
                              {" "}
                              <select
                                name="CreditAccountId"
                                value={dataJournalToSend.CreditAccountId}
                                onChange={handleDataInput}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                              >
                                <option value="" disabled selected>
                                  Pic Account Type
                                </option>
                                {dropdownList?.map((list) => (
                                  <option value={list.Value}>
                                    {list.Text}
                                  </option>
                                ))}
                              </select>{" "}
                            </td>

                            {/* narration */}

                            {/* debit */}
                            <td>
                              <input
                                required
                                name="jDebit"
                                value={debitCredit}
                                onChange={(e) => {
                                  setDebitCredit(e.target.value);
                                  handleDataInput(e);
                                }}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="number"
                              />
                            </td>

                            {/* credit */}
                            <td>
                              <input
                                required
                                value={debitCredit}
                                onChange={(e) => {
                                  setDebitCredit(e.target.value);
                                  handleDataInput(e);
                                }}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="number"
                              />
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td>{debitCredit}</td>
                        <td>{debitCredit}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="button__section">
                  {!newJournal && (
                    <button onClick={() => handleNewJournal()}>New</button>
                  )}

                  {edit && <button type="submit">Update</button>}

                  {newJournal && (
                    <>
                      {!edit && <button type="submit">Save</button>}

                      <button type="button" onClick={handleClearALL}>
                        Clear
                      </button>
                    </>
                  )}

                  <button type="button" onClick={handleExitfun}>
                    Exit
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="right__bottom__section"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  journalData: state.journalReducer.journalList,
  filterData: state.journalReducer.filteredList,
});

const mapDispatchToProps = {
  searchJournalEntry: actions.searchByDate,
  CreateJournalEntry: actions.create,
  updateJournalEntry: actions.update,
  deleteJournalEntry: actions.Delete,
  fetchJournalEntry: actions.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Journals);
