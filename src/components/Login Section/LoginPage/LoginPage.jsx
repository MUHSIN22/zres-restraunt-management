import React, { useEffect, useState } from "react";
import "./loginPage.scss";
import BgImage from "./img/blog-img-temp.jpg";
import { useHistory } from "react-router";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import LoadingScreen from "../../loadingScreen/LoadingScreen";

function LoginPage() {
  const history = useHistory();
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(false);
  const [typeValue, setTypeValue] = useState("");

  const handleClick = (e) => {
    setTypeValue(typeValue.concat(e.target.name));
  };

  const handleClear = () => {
    const dtaLenght = typeValue.length;
    setTypeValue(typeValue.slice(0, -1));
  };

  const handleSignInClick = () => {
    if (typeValue === "5146") {
      setLoading(true);
      setAuth(true);
      console.log("Sucessfull login");
    } else {
      console.log("Error login");
      setAuth(false);
    }
  };
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   if (loading) {
  //     let timer1 = setTimeout(() => history.push("./optionSection"), 5 * 1000);
  //   }

  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        history.push("./optionSection");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {/* loding section */}

      {loading && (
        <div className="loading__section__background">
          <LoadingScreen />
        </div>
      )}

      <div className="loginPage">
        <img src={BgImage} alt="" />
        <div className="main__section">
          <div className="headding">
            <div className="top__section">
              <h1>Restaurant Enterprise</h1>
              <h1>System</h1>
            </div>
            <div className="bottom__section">
              <h4>Powered by</h4>
              <h3>zclipse</h3>
            </div>{" "}
          </div>
          <div className="input__area__sectiom">
            <div className="top__section">
              <h2>WELCOME TO</h2>
              <h2>ZRES</h2>
            </div>

            <div className="authentication__result">
              <Stack sx={{ width: "100%" }} spacing={2}>
                {auth === false && (
                  <Alert severity="error">Wrong Password</Alert>
                )}
                {auth === true && (
                  <Alert severity="success">Login SucessFull</Alert>
                )}
              </Stack>
            </div>

            <div className="input__area__section">
              <div className="input__Secton">
                <svg
                  className="fingerPrint__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74.662"
                  height="74.662"
                  viewBox="0 0 74.662 74.662"
                >
                  <g id="surface1" transform="translate(-4 -4)">
                    <path
                      id="Path_3099"
                      data-name="Path 3099"
                      d="M5.333,4A1.332,1.332,0,0,0,4,5.333v8a1.333,1.333,0,0,0,2.667,0V6.667h6.666a1.333,1.333,0,0,0,0-2.667Zm64,0a1.333,1.333,0,0,0,0,2.667H76v6.666a1.333,1.333,0,0,0,2.667,0v-8A1.332,1.332,0,0,0,77.329,4ZM50.982,5.771A1.332,1.332,0,0,0,49.456,6.88l-.422,2.63a1.34,1.34,0,0,0,1.1,1.531,1.472,1.472,0,0,0,.213.016,1.334,1.334,0,0,0,1.312-1.12L52.086,7.3A1.333,1.333,0,0,0,50.982,5.771Zm-11.317.917a1.322,1.322,0,0,0-1.391,1.281,1.34,1.34,0,0,0,1.281,1.385,32.56,32.56,0,0,1,4.057.417,1.546,1.546,0,0,0,.219.016,1.334,1.334,0,0,0,.214-2.651A35.878,35.878,0,0,0,39.664,6.687Zm-4.677.135A31.539,31.539,0,0,0,22.2,10.911,33.207,33.207,0,0,0,7.114,30.623a1.334,1.334,0,1,0,2.562.745A30.5,30.5,0,0,1,23.535,13.223a28.842,28.842,0,0,1,11.718-3.75,1.333,1.333,0,0,0,1.2-1.458A1.316,1.316,0,0,0,34.988,6.823Zm22.483.927a1.319,1.319,0,0,0-1.245.786l-1.088,2.432a1.335,1.335,0,0,0,.672,1.766,1.358,1.358,0,0,0,.542.12,1.342,1.342,0,0,0,1.224-.792l1.088-2.437a1.338,1.338,0,0,0-.677-1.76A1.215,1.215,0,0,0,57.471,7.75Zm5.76,3.656a1.34,1.34,0,0,0-.9.49l-1.682,2.062a1.336,1.336,0,0,0,2.073,1.687l1.682-2.068a1.338,1.338,0,0,0-1.177-2.172Zm-22.9,1.208a30.466,30.466,0,0,0-4.6.177,1.332,1.332,0,1,0,.307,2.646C46.909,14.192,60.9,19.369,65.9,33.686a1.334,1.334,0,0,0,1.26.9A1.269,1.269,0,0,0,67.6,34.5a1.322,1.322,0,0,0,.818-1.693C63.621,19.067,51.315,13,40.331,12.614Zm-8.64,1.052a1.3,1.3,0,0,0-.526.047,26.778,26.778,0,0,0-5.9,2.521c-7.546,4.359-12.614,12.249-13.885,21.645a1.333,1.333,0,0,0,1.135,1.5,1.142,1.142,0,0,0,.188.016,1.334,1.334,0,0,0,1.318-1.156c1.161-8.572,5.75-15.754,12.577-19.7A24.364,24.364,0,0,1,31.91,16.27a1.333,1.333,0,0,0-.219-2.6Zm36.675,2.812a1.307,1.307,0,0,0-.995.234L65.21,18.275a1.337,1.337,0,0,0-.3,1.865,1.34,1.34,0,0,0,1.859.3l2.161-1.562a1.334,1.334,0,0,0,.3-1.859A1.314,1.314,0,0,0,68.366,16.478ZM39.107,18.494A23.042,23.042,0,0,0,28.42,21.567C17.843,27.676,13.791,40.612,18.338,53.752A36.1,36.1,0,0,0,22.7,61.793a1.318,1.318,0,0,0,1.094.573,1.336,1.336,0,0,0,1.094-2.1,33.776,33.776,0,0,1-4.031-7.39c-4.755-13.739,1.042-24.462,8.9-29a21.081,21.081,0,0,1,28.04,6.911,1.332,1.332,0,1,0,2.224-1.469A24.015,24.015,0,0,0,39.107,18.494Zm32.4,4.088a1.432,1.432,0,0,0-.526.089l-2.484.953A1.333,1.333,0,0,0,68.97,26.2a1.271,1.271,0,0,0,.474-.089l2.489-.948a1.336,1.336,0,0,0-.427-2.583Zm-31.993,1.4c-.443.01-.885.047-1.328.1a17.6,17.6,0,0,0-9.114,3.8,1.333,1.333,0,1,0,1.677,2.073,14.97,14.97,0,0,1,7.744-3.229,14.657,14.657,0,0,1,15.614,10.6c.943,3.281,3.489,5.468,7.364,6.323a11.987,11.987,0,0,0,2.63.266,19.127,19.127,0,0,0,1.984-.109l4.724-.5a1.335,1.335,0,1,0-.281-2.656l-4.718.5a11.739,11.739,0,0,1-3.771-.1c-2.937-.646-4.7-2.1-5.37-4.443A17.135,17.135,0,0,0,55.5,33.576,17.321,17.321,0,0,0,39.513,23.978Zm.2,5.328c-.307.01-.609.031-.917.068a12.145,12.145,0,0,0-8.838,5.39A11.842,11.842,0,0,0,28.5,44.753,40.559,40.559,0,0,0,49.7,69.876a1.293,1.293,0,0,0,.568.13,1.332,1.332,0,0,0,.573-2.536,37.915,37.915,0,0,1-19.8-23.483,9.2,9.2,0,0,1,1.14-7.76A9.49,9.49,0,0,1,39.1,32.019a9.348,9.348,0,0,1,9.88,6.765,13.4,13.4,0,0,0,5.619,7.7,1.333,1.333,0,1,0,1.469-2.224,10.83,10.83,0,0,1-4.526-6.213,12.017,12.017,0,0,0-11.827-8.744ZM26.842,31.269a1.331,1.331,0,0,0-1.354.583c-3.052,4.672-3.583,11.333-1.422,17.817,4.6,13.817,14.39,23.207,28.306,27.165a1.221,1.221,0,0,0,.359.052,1.335,1.335,0,0,0,.365-2.62c-13.025-3.7-22.191-12.5-26.5-25.441-1.906-5.718-1.484-11.52,1.125-15.515a1.331,1.331,0,0,0-.391-1.849A1.237,1.237,0,0,0,26.842,31.269Zm34.389,1.88a1.336,1.336,0,0,0-1.276,1.812,22.592,22.592,0,0,1,.849,2.724,1.328,1.328,0,0,0,1.3,1.021,1.313,1.313,0,0,0,.313-.037,1.328,1.328,0,0,0,.979-1.609A23.9,23.9,0,0,0,62.434,34,1.34,1.34,0,0,0,61.231,33.149ZM40.4,34.639a6.516,6.516,0,0,0-1.005.031,6.741,6.741,0,0,0-4.979,3.01,6.639,6.639,0,0,0-.8,5.588A35.323,35.323,0,0,0,42.17,57.934a1.333,1.333,0,1,0,1.917-1.854A32.78,32.78,0,0,1,36.17,42.5a4,4,0,0,1,.479-3.364,4.131,4.131,0,0,1,3.057-1.823,3.928,3.928,0,0,1,3.875,2.224,5.58,5.58,0,0,1,.266.693c2.026,7.093,7.614,12.135,15.327,13.832a23.065,23.065,0,0,0,5.593.505,1.337,1.337,0,0,0,1.307-1.364,1.324,1.324,0,0,0-1.37-1.3,20.971,20.971,0,0,1-4.958-.448C53.018,49.982,48.159,45.623,46.409,39.5a6.748,6.748,0,0,0-.448-1.151A6.631,6.631,0,0,0,40.4,34.639ZM39.914,40a1.316,1.316,0,0,0-.51.141,1.334,1.334,0,0,0-.677,1.583,27.608,27.608,0,0,0,1.021,2.937,1.339,1.339,0,0,0,1.234.818,1.263,1.263,0,0,0,.51-.1,1.323,1.323,0,0,0,.719-1.739,24.885,24.885,0,0,1-.927-2.667,1.559,1.559,0,0,0-.094-.234v-.005A1.332,1.332,0,0,0,39.914,40ZM12.38,41.831a1.339,1.339,0,0,0-1.312,1.354A40.114,40.114,0,0,0,26.514,73.73a1.333,1.333,0,1,0,1.63-2.109,36.964,36.964,0,0,1-9.432-10.854,36.51,36.51,0,0,1-4.979-17.624A1.331,1.331,0,0,0,12.4,41.831Zm60.6,3.922-6.609.7a17.151,17.151,0,0,1-5.474-.2,1.333,1.333,0,0,0-.573,2.6,17.657,17.657,0,0,0,3.786.385,23.874,23.874,0,0,0,2.536-.141l6.614-.7a1.335,1.335,0,0,0-.281-2.656ZM42.9,46.924a1.333,1.333,0,0,0-.885,2.036A26.961,26.961,0,0,0,64.741,61.33a1.333,1.333,0,0,0,0-2.667,24.315,24.315,0,0,1-20.494-11.15A1.332,1.332,0,0,0,42.9,46.924Zm29.16,4.286-2.7.286a1.335,1.335,0,0,0,.135,2.661,1.415,1.415,0,0,0,.146-.005l2.692-.287a1.335,1.335,0,0,0-.276-2.656Zm-25.8,7.458a1.352,1.352,0,0,0-.89.5,1.327,1.327,0,0,0,.213,1.87A30.964,30.964,0,0,0,63.2,67.954a.342.342,0,0,0,.073,0,1.332,1.332,0,0,0,.073-2.661,28.392,28.392,0,0,1-16.1-6.338A1.333,1.333,0,0,0,46.263,58.669Zm-19.228,5a1.334,1.334,0,0,0-1.021,2.239c.537.578,1.088,1.125,1.651,1.651a1.332,1.332,0,0,0,.911.354,1.313,1.313,0,0,0,.974-.427,1.334,1.334,0,0,0-.073-1.885c-.521-.479-1.021-.984-1.516-1.51A1.314,1.314,0,0,0,27.035,63.673ZM5.333,68A1.332,1.332,0,0,0,4,69.329v8a1.332,1.332,0,0,0,1.333,1.333h8a1.333,1.333,0,0,0,0-2.667H6.667V69.329A1.332,1.332,0,0,0,5.333,68Zm72,0A1.332,1.332,0,0,0,76,69.329V76H69.329a1.333,1.333,0,0,0,0,2.667h8a1.332,1.332,0,0,0,1.333-1.333v-8A1.332,1.332,0,0,0,77.329,68Zm-45.008.313a1.317,1.317,0,0,0-.995.213,1.333,1.333,0,0,0-.344,1.854,18.691,18.691,0,0,0,4.364,3.984,1.3,1.3,0,0,0,.734.219,1.333,1.333,0,0,0,.734-2.443,16.137,16.137,0,0,1-3.635-3.271A1.343,1.343,0,0,0,32.321,68.309ZM57.393,69.9a1.331,1.331,0,0,0-.052,2.609,36,36,0,0,0,3.573.6,1.532,1.532,0,0,0,.156.005,1.335,1.335,0,0,0,.151-2.661,31.864,31.864,0,0,1-3.3-.547A1.283,1.283,0,0,0,57.393,69.9Z"
                      transform="translate(0 0)"
                      fill="#040153"
                    />
                  </g>
                </svg>

                <input
                  class="input-field"
                  type="text"
                  value={typeValue}
                  onChange={(e) => setTypeValue(e.target.value)}
                />
              </div>
              <div className="button__section">
                <div className="sections">
                  <button name="7" onClick={handleClick}>
                    7
                  </button>
                  <button name="8" onClick={handleClick}>
                    8
                  </button>
                  <button name="9" onClick={handleClick}>
                    9
                  </button>
                  <button name="4" onClick={handleClick}>
                    4
                  </button>
                  <button name="5" onClick={handleClick}>
                    5
                  </button>
                  <button name="6" onClick={handleClick}>
                    6
                  </button>
                  <button name="1" onClick={handleClick}>
                    1
                  </button>
                  <button name="2" onClick={handleClick}>
                    2
                  </button>
                  <button name="3" onClick={handleClick}>
                    3
                  </button>
                  <button className="clear__button" onClick={handleClear}>
                    <h5>Clear</h5>
                  </button>
                  <button name="0" onClick={handleClick}>
                    0
                  </button>
                  <button
                    className="signin__button"
                    onClick={handleSignInClick}
                  >
                    <h5>Sign In</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blackOverlay"></div>
      </div>
    </>
  );
}

export default LoginPage;