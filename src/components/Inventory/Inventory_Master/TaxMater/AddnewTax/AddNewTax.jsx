import React, { useEffect, useState } from "react";
import "./addNewTax.scss";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
import { connect } from "react-redux";
import * as actions from "../../../../../State Manager/Actions/inventory/master/taxMasterAction";

function AddNewTax({
  setAddNewBtn,
  setMainTableView,
  editTax,
  fetchTaxList,
  createTaxList,
  updateTax,
  deleteTax,
  TaxList,
}) {
  const data = {
    TaxCode: "",
    TaxPercentage: "",
    Taxable: false,
    TypeOfTax: "",
    TypeName: null,
    UserID: 1,
    CMPid: 1,
  };

  // tax category id

  const [hideText, setHideText] = useState(false);
  const [dataToSend, setDataToSend] = useState(data);
  const [addSucessfull, setAddSucessfull] = useState(false);
  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [catregoryDropdown, setCategoryDropdown] = useState([]);

  useEffect(() => {
    fetchTaxList();
  }, []);

  useEffect(() => {
    if (editTax != 0) {
      setDataToSend({
        ...TaxList.find((x) => x.Taxid === editTax),
      });
    }
    console.log("THE DATA TO SEND IS", dataToSend);
  }, [editTax]);

  const getCategoryList = () => {
    const url = " http://localhost:38719/api/v1/Tax/GetTaxName?CMPid=1";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((listsFromServer) => {
        setCategoryDropdown(listsFromServer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleDatatoSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
      Taxable: e.target.checked,
    });
  };
  console.log(dataToSend);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTax > 0) {
      updateTax(editTax, dataToSend, () => window.alert("update sucessfull"));
    } else {
      createTaxList(dataToSend, () => {
        window.alert("sucess");
        setDataToSend(data);
      });
      console.log("THEDATA", dataToSend);
    }
  };

  const handleDeletefunctionss = () => {
    if (window.confirm("Are you sure you want to delete"))
      deleteTax(editTax, () => {
        window.alert("delete sucessfull");
        setAddNewBtn(false);
        setMainTableView(true);
      });
  };

  return (
    <>
      {snackbarSucess && <SucessSnackbars />}
      {snackbarFail && <FailSnackbars />}
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
                    required
                    type={hideText ? "password" : "text"}
                    style={{
                      marginLeft: "30px",
                    }}
                    value={dataToSend.TaxCode}
                    name="TaxCode"
                    onChange={handleDatatoSend}
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
                <h5>Tax Percentage</h5>
                <input
                  name="TaxPercentage"
                  value={dataToSend.TaxPercentage}
                  onChange={handleDatatoSend}
                  type="text"
                  style={{
                    marginLeft: "20px",
                    paddingLeft: 10,
                    width: "30%",
                  }}
                />
              </div>

              <div className="input__Section">
                <h5>Type of Tax</h5>

                <select
                  required
                  name="TypeOfTax"
                  id=""
                  value={dataToSend.TypeOfTax}
                  className="type__of__tax"
                  onChange={handleDatatoSend}
                  style={{
                    width: "50%",
                    marginLeft: "35px",
                    height: "30px",
                    border: "none",
                    outline: "none",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    boxShadow: "0 0 10px rgb(146, 146, 146)",
                  }}
                >
                  {" "}
                  <option value="" disabled selected>
                    Choose Tax
                  </option>
                  {catregoryDropdown.map((dtat) => (
                    <option value={dtat.Value}>{dtat.Text}</option>
                  ))}
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
              {editTax > 0 ? (
                <>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#040153",
                      color: "#ffff",
                    }}
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    style={{
                      backgroundColor: "#040153",
                      color: "#ffff",
                    }}
                    onClick={handleDeletefunctionss}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#040153",
                    color: "#ffff",
                  }}
                >
                  save
                </button>
              )}

              <button
                type="button"
                style={{
                  backgroundColor: "#ffff",
                  color: "#040153",
                }}
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
  TaxList: state.TaxMasterReducer.TaxList,
});

const mapDispatchToProps = {
  fetchTaxList: actions.fetchAll,
  createTaxList: actions.create,
  updateTax: actions.update,
  deleteTax: actions.Delete,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTax);
