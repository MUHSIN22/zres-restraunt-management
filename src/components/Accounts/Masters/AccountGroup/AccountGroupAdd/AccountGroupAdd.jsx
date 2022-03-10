import React, { useEffect, useState } from "react";
import * as actions from "../../../../../State Manager/Actions/Account/master/AccountGroupAction";
import "./accountGroupAdd.scss";
import { useDropzone } from "react-dropzone";
import SucessfullMag from "../../../../Inventory/Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import { connect } from "react-redux";
import FailSnackbars from "../../../../basic components/failSnackBar";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
function AccountGroupAdd({
  setAddNewBtn,
  editTableSelectedID,
  setMainTableView,
  setEditTableSelctedID,

  accountGroupList,
  CreateAccountGroupList,
  UpdateAccountGroup,
  deleteAccountGroup,
}) {
  const data = {
    AccountGroupName: "",
    GroupAbbr: "",
    AGCode: "",
    UserID: 1,
    CMPid: 1,
  };

  const [dataToSend, setDataToSend] = useState(data);

  const [sucessfullMsg, setSucessfullmsg] = useState(false);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);

  const [sucessAdded, setSucessAdded] = useState(true);
  const [snackBarOpen, setSnackbarOpen] = useState(true);

  useEffect(() => {
    if (editTableSelectedID != 0) {
      setDataToSend({
        ...accountGroupList.find(
          (x) => x.AccountGroupID === editTableSelectedID
        ),
      });
    }
    console.log("THE DATA TO SEND IS", dataToSend);
  }, [editTableSelectedID]);

  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setFailSnackBar(false);
    setSucessSnackBar(false);
    // setSucessfullmsg(true);
    console.log(dataToSend);
    if (editTableSelectedID === 0) {
      CreateAccountGroupList(
        dataToSend,
        () => window.alert("sucess"),
        setSucessSnackBar(true),
        setMessageToPass("Sucessfully Added"),
        setSnackbarOpen(true)
      );
      setDataToSend(data);
    } else {
      UpdateAccountGroup(
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
      deleteAccountGroup(
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
      <div className="AccountGroupAdd">
        <div className="headding__Section">
          <h2>Product Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => submitFormHandler(e)}>
            <div className="top__secton">
              <div className="rest__Sections">
                <div className="input__Sections">
                  <h5>Group Code</h5>
                  <input
                    onChange={handleAddCategoryToSend}
                    type="text"
                    value={dataToSend.AGCode}
                    name="AGCode"
                  />
                </div>

                <div className="input__Sections">
                  <h5>Group Abbr</h5>
                  <input
                    type="text"
                    onChange={handleAddCategoryToSend}
                    value={dataToSend.GroupAbbr}
                    name="GroupAbbr"
                  />
                </div>

                <div className="input__Sections">
                  <h5>Group Name</h5>
                  <input
                    onChange={handleAddCategoryToSend}
                    type="text"
                    value={dataToSend.AccountGroupName}
                    name="AccountGroupName"
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
  accountGroupList: state.AccountGroupReducer.accountGroupList,
});

const mapDispatchToProp = {
  CreateAccountGroupList: actions.create,
  UpdateAccountGroup: actions.update,
  deleteAccountGroup: actions.Delete,
};

export default connect(mapStateToProps, mapDispatchToProp)(AccountGroupAdd);
