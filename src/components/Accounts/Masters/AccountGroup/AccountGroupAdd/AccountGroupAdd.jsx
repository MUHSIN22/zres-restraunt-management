import React, { useEffect, useState } from "react";
import * as actions from "../../../../../State Manager/Actions/Account/master/AccountGroupAction";
import "./accountGroupAdd.scss";
import { useDropzone } from "react-dropzone";
import SucessfullMag from "../../../../Inventory/Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import { connect } from "react-redux";

function AccountGroupAdd({
  setAddNewBtn,
  editTableSelectedSnio,
  setMainTableView,
  setEditTableSelctedSino,
  editTableData,
  accountGroupList,
  CreateAccountGroupList,
  UpdateAccountGroup,
  deleteAccountGroup,
}) {
  const data = {
    accountGroupName: "",
    groupAbbr: "",
    agCode: "",
    userID: 1,
    cmPid: 1,
  };

  const [dataToSend, setDataToSend] = useState(data);

  const [sucessfullMsg, setSucessfullmsg] = useState(false);

  useEffect(() => {
    if (editTableSelectedSnio != 0) {
      setDataToSend({
        ...accountGroupList.find(
          (x) => x.accountGroupID == editTableSelectedSnio
        ),
      });
    }
  }, []);

  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    // setSucessfullmsg(true);
    console.log(dataToSend);
    if (editTableSelectedSnio == 0) {
      CreateAccountGroupList(dataToSend, () => window.alert("inserSucess"));
      setDataToSend(data);
    } else {
      UpdateAccountGroup(editTableSelectedSnio, dataToSend, () =>
        window.alert("inserSucess")
      );
    }
  };

  const handleDeletefunctionss = () => {
    if (window.confirm("comfirm delete"))
      deleteAccountGroup(editTableSelectedSnio, () => window.alert("sucess"));
  };

  return (
    <>
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
                    value={dataToSend.agCode}
                    name="agCode"
                  />
                </div>

                <div className="input__Sections">
                  <h5>Group Abbr</h5>
                  <input
                    type="text"
                    onChange={handleAddCategoryToSend}
                    value={dataToSend.groupAbbr}
                    name="groupAbbr"
                  />
                </div>

                <div className="input__Sections">
                  <h5>Group Name</h5>
                  <input
                    onChange={handleAddCategoryToSend}
                    type="text"
                    value={dataToSend.accountGroupName}
                    name="accountGroupName"
                  />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editTableSelectedSnio && <button type="submit">Update</button>}
              {editTableSelectedSnio && (
                <button
                  type="button"
                  onClick={() => handleDeletefunctionss(dataToSend.cmPid)}
                >
                  Delete
                </button>
              )}
              {!editTableSelectedSnio && <button type="submit">save</button>}
              <button
                onClick={() => {
                  setAddNewBtn(false);
                  setMainTableView(true);
                  setEditTableSelctedSino();
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
