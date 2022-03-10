import React, { useEffect, useState } from "react";
import "./addNewTax.scss";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";

function AddNewTax({ setAddNewBtn, setMainTableView }) {
  const data = {
    Taxid: "",
    Name: "",
    TaxPercentage: "",
    Taxable: false,
    Typeid: "",
    UserID: "",
    CMPid: "",
  };

  // tax category id

  const [hideText, setHideText] = useState(false);
  const [dataToSend, setDataToSend] = useState(data);
  const [addSucessfull, setAddSucessfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddSucessfull(true);
  };

  const handleDatatoSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
      Taxable: e.target.checked,
    });
  };
  console.log(dataToSend);
  return (
    <>
      {addSucessfull && (
        <SucessfullMag
          setPrintSucess={setAddSucessfull}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="add__new__tax">
        <div className="headding__Section">
          <h2>Tax Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="top__section">
              <div className="tax__code__Section">
                <div className="input__Section__tax">
                  <h5>Tax Code</h5>
                  <input
                    type={hideText ? "password" : "text"}
                    style={{
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="tax__checkbox__view">
                  <input
                    type="checkbox"
                    id="Discount"
                    name="fav_language"
                    checked={hideText}
                    onChange={(e) => setHideText(e.target.checked)}
                  />
                    <label for="html">Hide</label>
                </div>
              </div>

              <div className="input__Section">
                <h5>Type of Tax</h5>

                <select
                  name="Typeid"
                  id=""
                  value={dataToSend.Typeid}
                  className="type__of__tax"
                  onChange={handleDatatoSend}
                  style={{
                    width: "50%",
                    marginLeft: "35px",
                    height: "30px",
                    border: "none",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  <option value=""></option>
                </select>
              </div>

              <div className="input__section__wrapper">
                <div className="input__section__left__section">
                  <div className="with_checkbox">
                    <div className="checkbox_section">
                      <input
                        type="checkbox"
                        id="Taxable"
                        checked={dataToSend.Taxable}
                        onChange={handleDatatoSend}
                      />
                        <label for="Taxable">Taxable</label>
                    </div>
                  </div>
                </div>

                <div className="input__Section__right__section"></div>
              </div>
            </div>

            <div className="bottom__btn__section">
              <button type="submit">save</button>
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

export default AddNewTax;
