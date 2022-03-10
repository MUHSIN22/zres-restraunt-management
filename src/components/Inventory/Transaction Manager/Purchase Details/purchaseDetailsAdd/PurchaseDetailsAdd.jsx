import React, { useState } from "react";
import "./purchaseDetailsAdd.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

function PurchaseDetailsAdd({ setAddNewBtn, setMainTableView }) {
  const [startDate, setStartDate] = useState(null);
  const defvalue = {
    Products: "",
    HsnCode: "",
    BatchNo: "",
    Expiry: "",
    Qty: "",
    FreeQty: "",
    Rate: "",
    Disc: "",
    Gst: "",
    TaxParam: "",
    Total: "",
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const [values, setValues] = useState(defvalue);
  const [datainTable, setDatainTable] = useState([]);

  const handleAddDataToTable = (evt) => {
    const name = evt.target.value;
    setValues({
      ...values,
      [evt.target.name]: name,
    });
  };

  const handleDataforTable = (e) => {
    e.preventDefault();

    setDatainTable([...datainTable, values]);

    setValues(defvalue);
  };

  const handleEditTableData = (data) => {
    setValues(data);
  };

  const HandleUpdateData = (e) => {
    e.preventDefault();
    const code = values;

    const ProductExsit = datainTable.find(
      (items) => items.HsnCode === code.HsnCode
    );

    if (ProductExsit) {
      setDatainTable(
        datainTable.map((item) =>
          item.HsnCode === code.HsnCode ? { ...ProductExsit, code } : item
        )
      );
    }
  };

  console.log("Date", startDate);
  return (
    <div className="purchaseDetailsAdds">
      <div className="headderName">
        <h3>Purchase Entry</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Arr.No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Arr.Date</h5>
              <DatePicker
                selected={startDate}
                onChange={(date) => handleStartDate(date)}
                dateFormat={"dd/MM/yyyy"}
                isClearable
              />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Inv.No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Inv.Date</h5>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="radioBtn__Section">
            <h5>Payment Type</h5>
            <div className="radio__sec">
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
              <label for="css">Cash</label>
            </div>

            <div className="radio__sec">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">Credit</label>
            </div>
          </div>

          <div className="input__Sections">
            <h5>Supplier</h5>

            <select name="" id="">
              <option value="">ram</option>
              <option value="">revi</option>
              <option value="">kishor</option>
            </select>
          </div>

          <div className="input__Sections">
            <h5>Address</h5> <input type="text" />
          </div>

          <div className="input__Sections">
            <h5>GST No</h5> <input type="text" />
          </div>
        </div>
      </div>

      {/* ends */}

      <div className="add__deatils__for__table__section__area">
        <form autoComplete="off" onSubmit={handleDataforTable}>
          <div className="input__area__Section">
            <div className="left__input__areaa sectionss">
              <input
                type="text"
                name="Products"
                placeholder="Products"
                onChange={handleAddDataToTable}
                value={values.Products}
              />
              <input
                type="text"
                name="HsnCode"
                placeholder="HSN Code"
                onChange={handleAddDataToTable}
                value={values.HsnCode}
              />
              <input
                type="text"
                name="BatchNo"
                placeholder="Batch No"
                onChange={handleAddDataToTable}
                value={values.BatchNo}
              />
              <div
                className="input___datepickerrs"
                style={{
                  width: "90%",
                }}
              >
                <DatePicker
                  placeholderText="Expiry"
                  selected={startDate}
                  onChange={(date) => handleStartDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                />
              </div>

              <input
                type="text"
                name="Qty"
                placeholder="Qty"
                onChange={handleAddDataToTable}
                value={values.Qty}
              />
              <input
                type="text"
                name="FreeQty"
                placeholder="Free Qty"
                onChange={handleAddDataToTable}
                value={values.FreeQty}
              />
            </div>
            <div className="right__input__areaa sectionss">
              <input
                type="text"
                name="Rate"
                placeholder="Rate"
                onChange={handleAddDataToTable}
                value={values.Rate}
              />
              <input
                type="text"
                name="Disc"
                placeholder="Disc"
                onChange={handleAddDataToTable}
                value={values.Disc}
              />
              <input
                type="text"
                name="Gst"
                placeholder="GST"
                onChange={handleAddDataToTable}
                value={values.Gst}
              />
              <input
                type="text"
                name="TaxParam"
                placeholder="Tax Param"
                onChange={handleAddDataToTable}
                value={values.TaxParam}
              />
              <input
                type="text"
                name="Total"
                placeholder="Total"
                onChange={handleAddDataToTable}
                value={values.Total}
              />
              <div className="button__sectionssss">
                <button type="submit">Add Product</button>
                <button onClick={HandleUpdateData}>Update</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* mid table */}
      <div className="mid__section">
        <div className="table__sectionsss">
          <table className="table">
            <thead>
              <tr>
                <th>Products</th>
                <th>HSN Code</th>
                <th>BatchNo</th>
                <th>Expiry</th>
                <th>Qty</th>
                <th>Free Qty</th>
                <th>Rate</th>
                <th>Disc</th>
                <th>GST</th>
                <th>Tax Param</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {datainTable.map((data, index) => (
                <tr key={index} onClick={() => handleEditTableData(data)}>
                  <td>{data?.Products}</td>
                  <td>{data?.HsnCode}</td>
                  <td>{data?.BatchNo}</td>
                  <td>{data?.Expiry}</td>
                  <td>{data?.Qty}</td>
                  <td>{data?.FreeQty}</td>
                  <td>{data?.Rate}</td>
                  <td>{data?.Disc}</td>
                  <td>{data?.Gst}</td>
                  <td>{data?.TaxParam}</td>
                  <td>{data?.Total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total DISC</td>
                <td></td>
                <td></td>
                <td>Total</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="top__input__section">
          <div className="sections">
            <div className="input__section" style={{ marginRight: "30px" }}>
              <h5>Discount</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>CGST</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Add Disc</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section" style={{ marginRight: "30px" }}>
              <h5>Gross Amt</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>SGST</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Write Off</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section">
              <h5>Credit Note</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Total Tax</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5 className="netAmt">Net Amt</h5>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="bottom__btn__section">
          <button
            onClick={() => {
              setAddNewBtn(false);
              setMainTableView(true);
            }}
          >
            Save
          </button>
          <button>Print</button>
          <button
            onClick={() => {
              setAddNewBtn(false);
              setMainTableView(true);
            }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* ends */}
    </div>
  );
}

export default PurchaseDetailsAdd;
