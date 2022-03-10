import React, { useEffect, useState } from "react";

import "./accountHeadAdd.scss";
import { useDropzone } from "react-dropzone";
import SucessfullMag from "../../../../Inventory/Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";

function AccountHeadAdd({
  setAddNewBtn,
  editTableSelectedSnio,
  setMainTableView,
  setEditTableSelctedSino,
  editTableData,
}) {
  const data = {};
  const [files, setFiles] = useState([]);

  const [sucessfullMsg, setSucessfullmsg] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setSucessfullmsg(true);
  };
  return (
    <>
      {sucessfullMsg && (
        <SucessfullMag
          setPrintSucess={setSucessfullmsg}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="AccountHeadAdd">
        <div className="headding__Section">
          <h2>Product Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => submitFormHandler(e)}>
            <div className="top__secton">
              <div className="top__headder__section">
                <div className="left__Section">
                  <div className="input__Sections">
                    <h5>Head Code</h5>
                    <input type="text" required />
                  </div>
                </div>
                <div className="right__section">
                  <div className="input__Sections">
                    <h5>Head Id</h5>
                    <input type="text" value={"526"} disabled />
                  </div>
                </div>
              </div>

              <div className="rest__Sections">
                <div className="input__Sections">
                  <h5>Head Name</h5>
                  <input
                    type="text"
                    value={(editTableSelectedSnio && editTableData.name) || ""}
                    required
                  />
                </div>

                <div className="input__Sections">
                  <h5>Account Type</h5>
                  <select
                    name=""
                    id=""
                    style={{
                      width: "60%",
                      height: "30px",
                      borderRadius: "5px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <option value=""></option>
                  </select>
                </div>

                <div className="input__Sections">
                  <h5>Account Number</h5>
                  <input type="text" required />
                </div>

                <div className="input__Sections">
                  <h5>Place</h5>
                  <input type="text" required />
                </div>

                <div className="AddrressInputSection">
                  <h5>Address</h5>
                  <div className="address__wrapper__section">
                    <input type="text" required />
                    <input type="text" required />
                    <input type="text" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editTableSelectedSnio && <button type="submit">Update</button>}
              {editTableSelectedSnio && <button type="submit">Delete</button>}
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

export default AccountHeadAdd;
