import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./accountHeadAdd.scss";
import { useDropzone } from "react-dropzone";
import SucessfullMag from "../../../../Inventory/Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import * as actions from "../../../../../State Manager/Actions/Account/master/AccountHeadAction";
import FailSnackbars from "../../../../basic components/failSnackBar";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
function AccountHeadAdd({
  setAddNewBtn,
  setEditTableSelctedID,
  setMainTableView,
  editTableSelectedID,
  editTableData,
  CreateAccountHeadList,
  UpdateAccountHead,
  deleteAccountHead,
  accountHeadList,
}) {
  const data = {
    AHCode: null,
    AccountControlName: null,
    AccountGroupID: null,
    AccountHeadName: null,
    AccountNumber: null,
    Address: null,
    CMPid: 1,
    Place: null,
    UserID: 1,
  };

  const [dataToSend, setDataToSend] = useState(data);
  const [files, setFiles] = useState([]);
  const [dropdownList, setDropdownList] = useState([]);
  const [sucessfullMsg, setSucessfullmsg] = useState(false);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);
  const [snackBarOpen, setSnackbarOpen] = useState(true);
  useEffect(() => {
    if (editTableSelectedID != 0) {
      setDataToSend({
        ...accountHeadList.find((x) => x.AccountHeadID === editTableSelectedID),
      });
    }
  }, [editTableSelectedID]);

  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
    });
    console.log("the data to send", dataToSend);
  };

  // to get the category

  const getAccountType = () => {
    const url = "http://localhost:5000/api/v1/AccountHead/GetAccountGroupName";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((listsFromServer) => {
        setDropdownList(listsFromServer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAccountType();
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    setFailSnackBar(false);
    setSucessSnackBar(false);
    // setSucessfullmsg(true);
    console.log(dataToSend);
    if (editTableSelectedID === 0) {
      CreateAccountHeadList(
        dataToSend,
        () => window.alert("sucess"),
        setSucessSnackBar(true),
        setMessageToPass("Sucessfully Added"),
        setSnackbarOpen(true)
      );
      setDataToSend(data);
    } else {
      UpdateAccountHead(
        editTableSelectedID,
        dataToSend,
        () => setSucessSnackBar(true),
        setMessageToPass("Sucessfully Updated"),
        setSnackbarOpen(true)
      );
    }
  };

  const handleDeletefunctionss = () => {
    if (window.confirm("Are you sure you want to delete"))
      deleteAccountHead(
        editTableSelectedID,
        dataToSend.CMPid,
        () => setSucessSnackBar(true),
        setMessageToPass("Sucessfully Deleted"),
        setSnackbarOpen(true),
        setAddNewBtn(false),
        setMainTableView(true)
      );
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

      {sucessfullMsg && (
        <SucessfullMag
          setPrintSucess={setSucessfullmsg}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="AccountHeadAdd">
        <div className="headding__Section">
          <h2>Account Head</h2>
        </div>

        <div className="inner__Section">
          <form
            action=""
            autoComplete="off"
            onSubmit={(e) => submitFormHandler(e)}
          >
            <div className="top__secton">
              <div className="top__headder__section">
                <div className="left__Section">
                  <div className="input__Sections">
                    <h5>Head Code</h5>
                    <input
                      type="text"
                      required
                      onChange={handleAddCategoryToSend}
                      value={dataToSend.AHCode}
                      name="AHCode"
                    />
                  </div>
                </div>

                <div className="right__section">
                  <div className="input__Sections">
                    <h5>Head Id</h5>
                    <input
                      type="text"
                      disabled
                      value={dataToSend.AccountGroupID}
                      name="AccountGroupID"
                    />
                  </div>
                </div>
              </div>

              <div className="rest__Sections">
                <div className="input__Sections">
                  <h5>Head Name</h5>
                  <input
                    type="text"
                    name="AccountHeadName"
                    value={dataToSend.AccountHeadName}
                    onChange={handleAddCategoryToSend}
                    required
                  />
                </div>

                <div className="input__Sections">
                  <h5>Account Type</h5>
                  <select
                    name="AccountGroupID"
                    id=""
                    onChange={handleAddCategoryToSend}
                    value={dataToSend.AccountGroupID}
                    style={{
                      width: "60%",
                      height: "30px",
                      borderRadius: "5px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {dropdownList?.map((list) => (
                      <option value={list.Value}>{list.Text}</option>
                    ))}
                  </select>
                </div>

                <div className="input__Sections">
                  <h5>Account Number</h5>
                  <input
                    type="text"
                    required
                    name="AccountNumber"
                    value={dataToSend.AccountNumber}
                    onChange={handleAddCategoryToSend}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Place</h5>
                  <input
                    type="text"
                    required
                    name="Place"
                    value={dataToSend.Place}
                    onChange={handleAddCategoryToSend}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Address</h5>

                  <input
                    type="text"
                    required
                    name="Address"
                    value={dataToSend.Address}
                    onChange={handleAddCategoryToSend}
                  />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editTableSelectedID ? (
                <>
                  <button>Update</button>
                  <button onClick={() => handleDeletefunctionss(dataToSend)}>
                    Delete
                  </button>
                </>
              ) : (
                <button type="submit">save</button>
              )}

              <button
                onClick={() => {
                  setAddNewBtn(false);
                  setMainTableView(true);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  accountHeadList: state.AccountHeadReducer.accountHeadList,
});

const mapDispatchToProp = {
  CreateAccountHeadList: actions.create,
  UpdateAccountHead: actions.update,
  deleteAccountHead: actions.Delete,
};

export default connect(mapStateToProps, mapDispatchToProp)(AccountHeadAdd);
