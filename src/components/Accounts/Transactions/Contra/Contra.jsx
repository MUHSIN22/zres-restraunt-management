import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import "./contra.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import * as actions from "../../../../State Manager/Actions/Account/Transactions/contraAction";
import { connect } from "react-redux";
import LoadingScreen from "../../../loadingScreen/LoadingScreen";
function Contra({
  ContraData,
  CreateContraEntry,
  updateContraEntry,
  deleteContraEntry,
  fetchContraEntry,
}) {
  const dataJournal = {
    entryNo: "",
    jEntryDate: "",
    jRefNo: "",
    jCredit: "",
    jNarration: "",
    jDebit: "",
    debitAccountId: "",
    creditAccountId: "",
    financialYearID: "1",
    cmPid: "1",
    userID: "1",
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

  const handleDataInput = (e) => {
    const value = e.target.value;
    const Entrydate = moment(entryDate).format("DD-MM-YY");
    setDataJournalToSend({
      ...dataJournalToSend,
      [e.target.name]: value,
      jEntryDate: Entrydate,
    });
  };
  console.log("data to send", dataJournalToSend);

  useEffect(() => {
    fetchContraEntry();
  }, []);

  useEffect(() => {
    if (ContraData?.length === 0) {
      setloading(true);
      console.log("loadingg.........................");
    } else if (ContraData?.length > 0) {
      setloading(false);
      console.log("loading compleated");
      setDataFromServer(ContraData);
    } else {
    }
  }, [ContraData]);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const handleNewJournal = () => {
    setNewJournal(true);
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
    CreateContraEntry(dataJournalToSend, () => {
      window.alert("sucess");
    });
    setDataJournalToSend(dataJournal);
  };

  const handleClearALL = () => {
    setDataJournalToSend(dataJournal);
  };

  const handleEditOptions = (id) => {
    const newdata = ContraData.find((x) => x.entryNo == id);
    setDataJournalToSend(newdata);
    setNewJournal(true);
    setEdit(true);
  };

  const handleExitfun = () => {
    setEdit(false);
    setNewJournal(false);
    setDataJournalToSend(dataJournal);
  };

  console.log("DATA FROM SERVER", dataFromServer);

  return (
    <div className="Contra">
      <div className="top__header___Section">
        <h2>Contra</h2>
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
          <button>Search</button>
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
                  {loading && <LoadingScreen />}

                  {dataFromServer.map((data) => (
                    <tr onClick={() => handleEditOptions(data.entryNo)}>
                      <td>{data.jRefNo}</td>
                      <td>{data.jEntryDate}</td>
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
                <div className="input__sections">
                  <h5>Entry No</h5>
                  <input
                    required
                    name="entryNo"
                    value={dataJournalToSend.entryNo}
                    onChange={handleDataInput}
                    type="text"
                    style={{ boxShadow: "0 0 10px grey" }}
                  />
                </div>

                <div className="input__sections">
                  <h5 style={{ marginRight: "30px" }}>Entry Data</h5>
                  <DatePicker
                    selected={entryDate}
                    onChange={(date) => setEntryDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                  />
                </div>
              </div>
              <div className="input__section__container__bottom">
                <div className="input__sections">
                  <h5>Ref No</h5>
                  <input
                    required
                    name="jRefNo"
                    value={dataJournalToSend.jRefNo}
                    onChange={handleDataInput}
                    type="text"
                  />
                </div>

                <div className="input__sections">
                  <h5>Narration</h5>
                  <input
                    name="jNarration"
                    value={dataJournalToSend.jNarration}
                    onChange={handleDataInput}
                    type="text"
                    style={{ width: "250px" }}
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
                      <th>Account Name</th>
                      <th>Account Name</th>
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
                              name="debitAccountId"
                              value={dataJournalToSend.debitAccountId}
                              onChange={handleDataInput}
                              style={{
                                width: "100%",
                                outline: "none",
                                border: "none",
                                height: "100%",
                              }}
                            >
                              <option disabled value="">
                                Select Debit Account
                              </option>

                              <option value="one">Metro SuperMarket</option>
                              <option value="two">Cash In Hand</option>
                            </select>{" "}
                          </td>

                          {/* credit */}
                          <td>
                            {" "}
                            <select
                              name="creditAccountId"
                              value={dataJournalToSend.creditAccountId}
                              onChange={handleDataInput}
                              required
                              style={{
                                width: "100%",
                                outline: "none",
                                border: "none",
                                height: "100%",
                              }}
                            >
                              <option value="" disabled>
                                Select Credit Account
                              </option>
                              <option value="1">Metro SuperMarket</option>
                              <option value="2">Cash In Hand</option>
                            </select>{" "}
                          </td>
                          {/* narration */}

                          {/* debit */}
                          <td>
                            <input
                              required
                              name="jDebit"
                              value={dataJournalToSend.jDebit}
                              onChange={handleDataInput}
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
                              name="jCredit"
                              value={dataJournalToSend.jCredit}
                              onChange={handleDataInput}
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
                      <td>0</td>
                      <td>0</td>
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
  );
}

const mapStateToProps = (state) => ({
  ContraData: state.contraReducer.ContraList,
});

const mapDispatchToProps = {
  CreateContraEntry: actions.create,
  updateContraEntry: actions.update,
  deleteContraEntry: actions.Delete,
  fetchContraEntry: actions.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contra);
