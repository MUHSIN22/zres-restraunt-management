import React from "react";
import "./addNewCredit.scss";
function AddNewCredit({ setAddNewBtn, setMainTableView }) {
  return (
    <div className="AddNewCredit">
      <div className="headderName">
        <h3>Credit Note</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Entry No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Entry Date</h5>
              <input type="date" />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Cr.No</h5>
              <input type="text" className="invoiceno" />
            </div>
            <div className="input__sections invDate">
              <h5>Cr.Date</h5>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="input__Sections">
            <h5>Supplier</h5>

            <select name="" id="">
              <option value="">ram</option>
              <option value="">revi</option>
              <option value="">kishor</option>
            </select>
          </div>

          <div className="input__Sections">
            <input type="text" placeholder="Location" />
          </div>
          <div className="input__Sections">
            <input type="text" placeholder="GSTNO" />
          </div>

          <div className="radioBtn__Section">
            <div className="radio__sec">
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
              <label for="css">Cash Bill</label>
            </div>

            <div className="radio__sec">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">Credit Bill</label>
            </div>
          </div>
        </div>
      </div>

      {/* ends */}

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
              <tr>
                <td>Suger</td>
                <td>3004104</td>
                <td>e201200</td>
                <td>12/2021</td>
                <td>20kg</td>
                <td>0</td>
                <td>100</td>
                <td>0</td>
                <td>12%</td>
                <td>qty</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Suger</td>
                <td>3004104</td>
                <td>e201200</td>
                <td>12/2021</td>
                <td>20kg</td>
                <td>0</td>
                <td>100</td>
                <td>0</td>
                <td>12%</td>
                <td>qty</td>
                <td>1000</td>
              </tr>
            </tbody>

            <tfoot className="tfootTotal">
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Disc total</th>
                <th></th>
                <th></th>
                <th>Total</th>
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
            <div className="input__section">
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
            <div className="input__section">
              <h5>Gross Discount</h5>
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

export default AddNewCredit;
