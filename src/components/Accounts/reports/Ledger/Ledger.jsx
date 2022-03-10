import React, { useEffect, useState } from "react";
import "./ledger.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import AccountLedger from "./AccoutLedger/AccountLedger";
import * as actions from "../../../../State Manager/Actions/Account/reports/LegerAction";
import { connect } from "react-redux";

const Date = [
  {
    SINO: "1",

    productCode: 541,
    Amound: 10000,

    productName: "sugar",
    stock: 50,
  },

  {
    SINO: "2",

    productCode: 341,
    Amound: 10000,

    productName: "oil",
    stock: 10,
  },

  {
    SINO: "3",

    productCode: 241,
    Amound: 100000,

    productName: "Potato",
    stock: 30,
  },

  {
    SINO: "4",

    productCode: 341,
    Amound: 10000,

    productName: "Onion",
    stock: 10,
  },
];

const valuesToSend = {
  fromDate: "",
  toDate: "",
};

function Ledger({
  fetchLedgerEntry,
  LedgerList,
  filterData,
  searchLedgerEntry,
}) {
  const [clickedTr, SetClickedTr] = useState("");
  const [filterValue, setFilterValue] = useState(valuesToSend);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, settoDate] = useState(null);
  const [loading, setloading] = useState(false);
  const [dropdownList, setDropdownList] = useState([]);
  const [accountNameId, setAccountNameId] = useState();
  const handleFromDate = (date) => {
    setFromDate(date);
    settoDate(null);
  };

  const handleToDate = (date) => {
    settoDate(date);
  };

  const handleFilterByData = () => {
    const fromdate = moment(fromDate).format("MM-DD-YYYY").toString();
    const todate = moment(toDate).format("MM-DD-YYYY").toString();
    console.log("fromdate:", fromdate, ",", "todate:", todate);
    searchLedgerEntry(fromdate, todate, accountNameId, () => {
      window.alert("sucess filter");

      console.log("the data inside ", dataFromServer);
    });
  };

  // useEffect(() => {
  //   handleFilteration();
  // }, [convertedFromDate, convertedToDate]);

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

  const handleCheckBoxFilter = (e) => {
    const checked = e.target.checked;
    setFilterValue({
      ...filterValue,
      [e.target.name]: checked,
    });
  };

  const getAccountType = () => {
    const url = "http://localhost:5000/api/v1/Ledger/GetAccountGroupName";

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

  const handleAccountNameID = (e) => {
    const data = e.target.value;
    setAccountNameId(data);
  };

  // const handleFilteration = () => {
  //   setFilterValue({
  //     ...filterValue,
  //     fromDate: convertedFromDate,
  //     toDate: convertedToDate,
  //   });
  // };

  // console.log(
  //   "FilterValue",
  //   filterValue,
  //   "FROMDATE",
  //   convertedFromDate,
  //   "TODATE",
  //   convertedToDate
  // );

  // const handleSubmitDate = () => {
  //   fetchContraEntry(filterValue.fromDate, filterValue.toDate, () =>
  //     window.alert("sucess")
  //   );
  // };
  // selecting row

  // const[rowClick,setRowClick]
  console.log("the account id is ", accountNameId);

  return (
    <>
      {clickedTr && <AccountLedger SetClickedTr={SetClickedTr} />}

      {!clickedTr && (
        <div className="Ledger">
          <div className="top__Section">
            <div className="headder__Section">
              <div className="left">
                <h3>Ledger</h3>
              </div>

              <div className="right">
                <div className="icon__section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.555"
                    height="15.555"
                    viewBox="0 0 15.555 15.555"
                  >
                    <g id="surface1" transform="translate(0 0)">
                      <path
                        id="Path_3086"
                        data-name="Path 3086"
                        d="M4.169,0A1.8,1.8,0,0,0,2.375,1.794V4.786H1.794A1.8,1.8,0,0,0,0,6.58v3.59a1.794,1.794,0,0,0,1.794,1.794h.581v1.8a1.8,1.8,0,0,0,1.794,1.794h7.179a1.805,1.805,0,0,0,1.8-1.794v-1.8h.617a1.794,1.794,0,0,0,1.794-1.794V6.58a1.8,1.8,0,0,0-1.794-1.794h-.617V1.794A1.805,1.805,0,0,0,11.348,0Zm0,1.2h7.179a.593.593,0,0,1,.6.6V4.786H3.571V1.794A.591.591,0,0,1,4.169,1.2Zm8.695,4.786a.9.9,0,1,1-.9.9A.9.9,0,0,1,12.864,5.982ZM3.571,8.975h8.377v4.786a.592.592,0,0,1-.6.6H4.169a.59.59,0,0,1-.6-.6Zm1.215,1.2v1.2h5.983v-1.2Zm0,1.794v1.2H8.975v-1.2Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </svg>

                  <h4>Print</h4>
                </div>
                <div className="icon__section">
                  <svg
                    id="surface1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.349"
                    height="14.714"
                    viewBox="0 0 16.349 14.714"
                  >
                    <path
                      id="Path_3087"
                      data-name="Path 3087"
                      d="M20.131,6H14.712A.713.713,0,0,0,14,6.712V9.68h6.131Z"
                      transform="translate(-9.913 -6)"
                      fill="#169154"
                    />
                    <path
                      id="Path_3088"
                      data-name="Path 3088"
                      d="M14,33.055V36a.713.713,0,0,0,.712.712h5.419V33.055Z"
                      transform="translate(-9.913 -21.997)"
                      fill="#18482a"
                    />
                    <path
                      id="Path_3089"
                      data-name="Path 3089"
                      d="M14,15h6.131v3.679H14Z"
                      transform="translate(-9.913 -11.324)"
                      fill="#0c8045"
                    />
                    <path
                      id="Path_3090"
                      data-name="Path 3090"
                      d="M14,24h6.131v3.7H14Z"
                      transform="translate(-9.913 -16.645)"
                      fill="#17472a"
                    />
                    <path
                      id="Path_3091"
                      data-name="Path 3091"
                      d="M34.419,6H29V9.68h6.131V6.712A.713.713,0,0,0,34.419,6Z"
                      transform="translate(-18.782 -6)"
                      fill="#29c27f"
                    />
                    <path
                      id="Path_3092"
                      data-name="Path 3092"
                      d="M29,33.055v3.656h5.419A.713.713,0,0,0,35.131,36V33.055Z"
                      transform="translate(-18.782 -21.997)"
                      fill="#27663f"
                    />
                    <path
                      id="Path_3093"
                      data-name="Path 3093"
                      d="M29,15h6.131v3.679H29Z"
                      transform="translate(-18.782 -11.324)"
                      fill="#19ac65"
                    />
                    <path
                      id="Path_3094"
                      data-name="Path 3094"
                      d="M29,24h6.131v3.7H29Z"
                      transform="translate(-18.782 -16.645)"
                      fill="#129652"
                    />
                    <path
                      id="Path_3095"
                      data-name="Path 3095"
                      d="M11.488,22.175h-6.8A.688.688,0,0,1,4,21.488v-6.8A.688.688,0,0,1,4.687,14h6.8a.688.688,0,0,1,.687.687v6.8A.688.688,0,0,1,11.488,22.175Z"
                      transform="translate(-4 -10.73)"
                      fill="#0c7238"
                    />
                    <path
                      id="Path_3096"
                      data-name="Path 3096"
                      d="M9.642,19h.974l.792,1.534L12.245,19h.91L11.9,21.044l1.284,2.044h-.961l-.862-1.606L10.5,23.087H9.527l1.3-2.052Z"
                      transform="translate(-7.268 -13.686)"
                      fill="#fff"
                    />
                  </svg>
                  <h4>Export Excel</h4>
                </div>
                <div className="icon__section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.916"
                    height="15.64"
                    viewBox="0 0 11.916 15.64"
                  >
                    <g id="surface1" transform="translate(-8 -3)">
                      <path
                        id="Path_3097"
                        data-name="Path 3097"
                        d="M19.916,18.64H8V3h8.192l3.724,3.724Z"
                        fill="#ff5722"
                      />
                      <path
                        id="Path_3098"
                        data-name="Path 3098"
                        d="M32.538,8.038H29V4.5Z"
                        transform="translate(-13.18 -0.941)"
                        fill="#fbe9e7"
                      />
                      <path
                        id="Path_3099"
                        data-name="Path 3099"
                        d="M14.548,25.45v1.3H13.8V23.047h1.263a1.156,1.156,0,0,1,.877.342,1.225,1.225,0,0,1,.327.886,1.149,1.149,0,0,1-.324.86,1.224,1.224,0,0,1-.9.316Zm0-.624h.515a.405.405,0,0,0,.33-.14.615.615,0,0,0,.118-.407.747.747,0,0,0-.119-.442.385.385,0,0,0-.321-.166h-.522Z"
                        transform="translate(-3.641 -12.582)"
                        fill="#ffebee"
                      />
                      <path
                        id="Path_3100"
                        data-name="Path 3100"
                        d="M21.766,26.753V23.047h.979a1.35,1.35,0,0,1,1.036.412,1.617,1.617,0,0,1,.393,1.13v.6a1.623,1.623,0,0,1-.385,1.148,1.376,1.376,0,0,1-1.063.416Zm.748-3.082v2.461h.224a.624.624,0,0,0,.527-.2,1.176,1.176,0,0,0,.161-.681v-.643a1.323,1.323,0,0,0-.145-.724.589.589,0,0,0-.495-.215Z"
                        transform="translate(-8.64 -12.582)"
                        fill="#ffebee"
                      />
                      <path
                        id="Path_3101"
                        data-name="Path 3101"
                        d="M31.585,25.24H30.421v1.513h-.749V23.047h2.052v.624h-1.3v.95h1.164Z"
                        transform="translate(-13.602 -12.582)"
                        fill="#ffebee"
                      />
                    </g>
                  </svg>

                  <h4>Export Pdf</h4>
                </div>
              </div>
            </div>
            <div className="bottom__section">
              <div className="input__Section">
                <div className="input__field">
                  <h4>From Date</h4>
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => handleFromDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    isClearable
                    placeholderText="DD/MM/YYYY"
                  />
                </div>

                <div className="input__field">
                  <h4>To Date</h4>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => handleToDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={fromDate}
                    isClearable
                    placeholderText="DD/MM/YYYY"
                  />
                </div>

                <div className="checkbox__fiels">
                  <div className="check__field">
                    <input
                      type="checkbox"
                      name="debitor"
                      id=""
                      checked={filterValue.debitor}
                      onChange={handleCheckBoxFilter}
                    />
                    <h4>Debitors</h4>
                  </div>

                  <div className="check__field">
                    <input
                      type="checkbox"
                      name="creditor"
                      id=""
                      checked={filterValue.creditor}
                      onChange={handleCheckBoxFilter}
                    />
                    <h4>Creditors</h4>
                  </div>

                  <div className="check__field">
                    <input
                      type="checkbox"
                      name="bank"
                      id=""
                      checked={filterValue.bank}
                      onChange={handleCheckBoxFilter}
                    />
                    <h4>Bank</h4>
                  </div>

                  <div className="check__field">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={filterValue.others}
                      onChange={handleCheckBoxFilter}
                    />
                    <h4>Other</h4>
                  </div>
                </div>
              </div>

              <div className="bottom__input__section">
                <div className="input__field">
                  <h4>Ledger Name</h4>
                  <select name="" id="" onChange={handleAccountNameID}>
                    <option value="" disabled selected>
                      choose
                    </option>
                    {dropdownList?.map((data) => (
                      <option value={data.Value}>{data.Text}</option>
                    ))}
                  </select>
                </div>

                <div className="serch__box" onClick={handleFilterByData}>
                  <h4>Search</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__Section">
            <div className="table__sections">
              <table className="table">
                <thead>
                  <tr>
                    <th>SINo</th>
                    <th>Entry Date</th>
                    <th colspan="2">Acc Name</th>

                    <th>Debit</th>
                    <th>Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFromServer.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.EntryDate}</td>
                      <td colspan={"2"}>{data.AccountName}</td>

                      <td>{data.Debit}</td>
                      <td>{data.Credit}</td>
                    </tr>
                  ))}
                </tbody>
                {/* <tfoot>
                  <tr>
                    <td></td>

                    <td></td>

                    <td colSpan={2}>Total</td>
                    <td>8000</td>
                    <td>0.00</td>
                  </tr>
                </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  filterData: state.ledgerReducer.filteredList,
});

const mapDispatchToProps = {
  fetchLedgerEntry: actions.fetchAll,
  searchLedgerEntry: actions.searchByDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Ledger);
