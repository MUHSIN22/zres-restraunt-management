import React, { useState } from "react";
import "./splitCheck.scss";
function SplitCheck({ setSplitCheck }) {
  return (
    <div className="SpitCheck">
      <div className="splitCheckHeadder__Section">
        <h3>Split check</h3>
        <p>25/11/2021 9:10:36 AM</p>
      </div>

      <div className="table__sections">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div
                  className="data__wrapperssss"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>458</h4> <h4>$30.058</h4>
                </div>
              </th>
              <th>
                <div
                  className="data__wrapperssss"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>458/2</h4> <h4>$15.058</h4>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "0px" }}>
                <div className="data__wrapper__body active">
                  <p>Bobs Barn Burger</p>
                  <p>2</p>
                  <p>15.0</p>
                  <p>15.0</p>
                </div>
              </td>

              <td>
                <div className="data__wrapper__body">
                  <p>Bobs Barn Burger</p>
                  <p>2</p>
                  <p>15.0</p>
                  <p>15.0</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bottom__spiltcheck__btn__section">
        <div className="spilt__btn__section">
          <button style={{ backgroundColor: "#DFA75C" }}>Add Check</button>
          <button style={{ backgroundColor: "#31CDD2" }}> Share Check</button>
          <button style={{ backgroundColor: "#E1870E" }}>Clear Check</button>
          <button style={{ backgroundColor: "#040153" }}>Remove Check</button>
        </div>
        <div className="spilt__btn__section">
          <button
            style={{ backgroundColor: "#E1870E" }}
            onClick={() => setSplitCheck(false)}
          >
            Cancel
          </button>
          <button style={{ backgroundColor: "#040153" }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default SplitCheck;
