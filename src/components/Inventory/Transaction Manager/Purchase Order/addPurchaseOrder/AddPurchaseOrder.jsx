import React, { useState } from "react";
import "./AddPurchaseOrder.scss";

function PurchaseDetailsAdd({ setAddNewBtn, setMainTableView }) {
  const defvalue = {
    Products: "",
    Qty: "",
    Rate: "",
    Amound: "",
    Remark: "",
    SINO: "",
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

  return (
    <div className="purchaseDetailsAdds">
      <div className="headderName">
        <h3>Purchase Order</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Order.No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Order.Date</h5>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="input__Sections">
            <h5>Supplier Name</h5>

            <select name="" id="">
              <option value="">ram</option>
              <option value="">revi</option>
              <option value="">kishor</option>
            </select>
          </div>

          <div className="input__Sections">
            <h5>Address</h5> <input type="text" name="address1" />
          </div>

          <div className="input__Sections">
            <input type="text" name="address2" />
          </div>

          <div className="input__Sections">
            <input type="text" name="address3" />
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
                name="SINO"
                placeholder="SINO"
                onChange={handleAddDataToTable}
                value={values.SINO}
              />
              <input
                type="text"
                name="Products"
                placeholder="Products"
                onChange={handleAddDataToTable}
                value={values.Products}
              />
              <input
                type="text"
                name="Qty"
                placeholder="Qty"
                onChange={handleAddDataToTable}
                value={values.Qty}
              />
              <input
                type="text"
                name="Rate"
                placeholder="Rate"
                onChange={handleAddDataToTable}
                value={values.Rate}
              />
            </div>
            <div className="right__input__areaa sectionss">
              <input
                type="text"
                name="Amound"
                placeholder="Amound"
                onChange={handleAddDataToTable}
                value={values.Amound}
              />
              <input
                type="text"
                name="Remark"
                placeholder="Remark"
                onChange={handleAddDataToTable}
                value={values.Remark}
              />
              <button type="submit">Add Product</button>
              <button onClick={HandleUpdateData}>Update</button>
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
                <th>SINO</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amound</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {datainTable.map((data, index) => (
                <tr key={index} onClick={() => handleEditTableData(data)}>
                  <td>{data?.SINO}</td>
                  <td>{data?.Products}</td>
                  <td>{data?.Qty}</td>
                  <td>{data?.Rate}</td>
                  <td>{data?.Amound}</td>
                  <td>{data?.Remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="bottom__btn__section">
          <button
            onClick={() => {
              setAddNewBtn(false);
              setMainTableView(true);
            }}
          >
            Save
          </button>

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
