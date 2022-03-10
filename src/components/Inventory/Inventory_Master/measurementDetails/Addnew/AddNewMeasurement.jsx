import React, { useState } from "react";
import { connect } from "react-redux";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import "./addnewMesurement.scss";
import * as actions from "../../../../../State Manager/Actions/inventory/master/mesurementMasterActon";
function AddNewMeasurement({
  setAddNewBtn,
  setMainTableView,
  createMesurementList,
}) {
  const data = {
    uoMid: 1,
    unit: "",
    symbol: "",
    discription: "",
    userID: 1,
    cmPid: 1,
  };
  const [DataToSend, setDataToSend] = useState(data);

  const [addSucessfull, setAddSucessfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMesurementList(JSON.stringify(DataToSend), () => {
      alert("sucess");
    });
    console.log("THEDATA", DataToSend);
  };

  const handleAddDataToSend = (evt) => {
    const name = evt.target.value;
    const OrderBlockeds = evt.target.checked;
    setDataToSend({
      ...DataToSend,
      [evt.target.name]: name,
      OrderBloocked: OrderBlockeds,
    });
  };
  return (
    <>
      {addSucessfull && (
        <SucessfullMag
          setPrintSucess={setAddSucessfull}
          messagetoPrint={"Saved Sucessfully"}
        />
      )}
      <div className="add__new__measurement">
        <div className="headding__Section">
          <h2>Unit Measurement</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="top__secton">
              <div className="lef__Side__form">
                <div className="input__Sections">
                  <h5>Unit Code</h5>
                  <input
                    type="text"
                    name="unitCode"
                    onChange={handleAddDataToSend}
                    value={DataToSend.unitCode}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Unit</h5>
                  <input
                    type="number"
                    name="unit"
                    onChange={handleAddDataToSend}
                    value={DataToSend.unit}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Unit symbol</h5>
                  <input
                    type="text"
                    name="symbol"
                    onChange={handleAddDataToSend}
                    value={DataToSend.symbol}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Unit Description</h5>
                  <input
                    type="text"
                    name="discription"
                    onChange={handleAddDataToSend}
                    value={DataToSend.discription}
                  />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              <button type="submit">save</button>
              <button
                type="button"
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
  mesurementList: state.MesurementMasterReducer.MesurementList,
});

const mapDispatchToProps = {
  createMesurementList: actions.create,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMeasurement);
