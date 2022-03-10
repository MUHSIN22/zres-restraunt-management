import React, { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import "./payment.scss";
import ChangeDue from "./changeDue/ChangeDue";
import SplitCheck from "./spilitCheck/SplitCheck";

function Payment({ setPaymentOption, paymentOption, setPaymentSUcessfull }) {
  const [pay, setPay] = useState(false);
  const [mainPaymentSection, setMainPaymentSection] = useState(true);
  const [changeDueActive, setChangeDueActive] = useState(false);
  return (
    <>
      {/* change due */}
      {changeDueActive && (
        <div className="ChangeDueSection">
          <ChangeDue
            setPaymentOption={setPaymentOption}
            setPaymentSUcessfull={setPaymentSUcessfull}
          />
        </div>
      )}

      {/* loayality readeam setion */}
      {pay && (
        <div className="loyality__redeam__section">
          <div className="top__loyality__section">
            <h3>
              Do you want to redeem your Loyalty points in this transaction?
            </h3>
          </div>
          <div className="bottom__loyality__section">
            <button>Yes</button>
            <button
              onClick={() => {
                setPay(false);
                setMainPaymentSection(true);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}

      {mainPaymentSection && (
        <div className="Payment__Section">
          <div className="left__payment__section">
            <div className="left__top__payment__section">
              <h4>Total Amount OMR</h4>
              <h1>450000</h1>
            </div>
            <hr style={{ marginBottom: "10px" }} />

            <div className="left__bottom__payment__section">
              <div className="top__section">
                <CalculateIcon />

                <h3>450000</h3>

                <select name="" id="">
                  <option value="">Cash</option>
                  <option value="">UPI</option>
                </select>
              </div>

              <hr style={{ marginTop: "10px", marginBottom: "5px" }} />

              <div className="bottom__area__sections">
                <h4>Walk in</h4>

                <div className="button__area">
                  <button onClick={() => setPaymentOption(false)}>Back</button>
                  <button
                    onClick={() => {
                      setPay(true);
                      setMainPaymentSection(false);
                    }}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right__payment__section">
            <div className="top__right__payment">
              <div className="money__put__area">
                <input type="text" />
              </div>
            </div>
            <div className="bottom__right__payment">
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>0.000</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>100.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>200.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>300.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
              >
                <h3>1000.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
                onClick={() => setChangeDueActive(true)}
              >
                <h3>Next $ Up</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
                onClick={() => setChangeDueActive(true)}
              >
                <h3>Exact Cash</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
              >
                <h3>Cash</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
