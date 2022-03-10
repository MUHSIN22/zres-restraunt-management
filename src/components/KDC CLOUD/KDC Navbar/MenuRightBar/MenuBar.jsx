import React from "react";
import "./menuBar.scss";
function MenuBar({ setSelectedMainOption }) {
  return (
    <div className="menuBar__section">
      <div
        className="sections"
        onClick={() => setSelectedMainOption("Accounts")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.633"
          height="45.633"
          viewBox="0 0 45.633 45.633"
        >
          <path
            id="Path_56"
            data-name="Path 56"
            d="M24.8,1.984A22.816,22.816,0,1,0,47.617,24.8,22.831,22.831,0,0,0,24.8,1.984Zm0,1.984A20.834,20.834,0,1,1,3.969,24.8,20.82,20.82,0,0,1,24.8,3.969Zm0,5.953a.992.992,0,1,0,.992.992A.994.994,0,0,0,24.8,9.922Zm-3.969.992a.992.992,0,1,0,.992.992A.994.994,0,0,0,20.832,10.914Zm7.938,0a.992.992,0,1,0,.992.992A.994.994,0,0,0,28.77,10.914ZM17.855,13.891a.99.99,0,1,0,.992.992A1,1,0,0,0,17.855,13.891Zm13.891,0a.99.99,0,1,0,.992.992A.994.994,0,0,0,31.746,13.891ZM16.863,17.855a.992.992,0,1,0,.992.992A1,1,0,0,0,16.863,17.855Zm15.875,0a.992.992,0,1,0,.992.992A1,1,0,0,0,32.738,17.855ZM17.855,21.824a.992.992,0,1,0,.992.992A1,1,0,0,0,17.855,21.824Zm13.891,0a.992.992,0,1,0,.992.992A.994.994,0,0,0,31.746,21.824ZM20.832,24.8a.992.992,0,1,0,.992.992A.994.994,0,0,0,20.832,24.8Zm7.938,0a.992.992,0,1,0,.992.992A.994.994,0,0,0,28.77,24.8Zm-3.969.992a.992.992,0,1,0,.992.992A.994.994,0,0,0,24.8,25.793Zm-5.953,1.984a.992.992,0,1,0,.992.992A1,1,0,0,0,18.848,27.777Zm11.906,0a.992.992,0,1,0,.992.992A.994.994,0,0,0,30.754,27.777ZM15.625,29.637a.946.946,0,0,0-.731.188l-.012-.012a.994.994,0,0,0,.59,1.793,1.018,1.018,0,0,0,.586-.184,1.007,1.007,0,0,0,.215-1.395A.962.962,0,0,0,15.625,29.637Zm18.352,0a.946.946,0,0,0-.645.391,1,1,0,0,0,.211,1.395,1.027,1.027,0,0,0,.586.184.983.983,0,0,0,.582-1.781A.954.954,0,0,0,33.977,29.637Zm-21.4,2.684a.954.954,0,0,0-.652.379.986.986,0,0,0,.188,1.387.953.953,0,0,0,.6.207A.969.969,0,0,0,13.5,33.9a.992.992,0,0,0-.184-1.395A1.019,1.019,0,0,0,12.578,32.32Zm24.445,0a1.009,1.009,0,0,0-.734.188A.994.994,0,0,0,36.1,33.9a.981.981,0,0,0,1.387.184A1,1,0,0,0,37.68,32.7.971.971,0,0,0,37.023,32.32ZM10.914,35.715a.992.992,0,1,0,.992.992A.994.994,0,0,0,10.914,35.715Zm27.777,0a.992.992,0,1,0,.992.992A.994.994,0,0,0,38.691,35.715Z"
            transform="translate(-1.984 -1.984)"
            fill="#fff"
          />
        </svg>

        <h3>Accounts</h3>
      </div>

      <div className="sections" onClick={() => setSelectedMainOption("Orders")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38.519"
          height="42.799"
          viewBox="0 0 38.519 42.799"
        >
          <g id="surface1" transform="translate(-3 -2)">
            <path
              id="Path_57"
              data-name="Path 57"
              d="M37.239,2a2.14,2.14,0,1,1-4.28,0h-4.28A2.14,2.14,0,1,1,24.4,2h-4.28a2.14,2.14,0,0,1-4.28,0H11.56A2.14,2.14,0,1,1,7.28,2H3V44.8H41.519V2Zm-10.7,34.239H9.42v-4.28H26.539Zm0-8.56H9.42V23.4H26.539Zm8.56,8.56h-4.28v-4.28H35.1Zm0-8.56h-4.28V23.4H35.1Zm0-10.7H9.42V12.7H35.1Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>

        <h3>Orders</h3>
      </div>

      <div
        className="sections"
        onClick={() => setSelectedMainOption("Kitchen Display System")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44.976"
          height="41.548"
          viewBox="0 0 44.976 41.548"
        >
          <g id="surface1" transform="translate(0.015 -1.921)">
            <path
              id="Path_58"
              data-name="Path 58"
              d="M21.556,1.95,18.1,2.382a3.5,3.5,0,0,0-2.967,3.892l.164,1.185-5.187.7a4.266,4.266,0,0,0-3.132,2.165,4.294,4.294,0,0,1-3.18,2.159,1.743,1.743,0,1,0,.48,3.454l34.235-4.591a1.726,1.726,0,1,0-.432-3.4,4.229,4.229,0,0,1-3.618-1.24c-1.076-.836-1.946-1.521-3.618-1.3l-5.235.7-.164-1.185A3.5,3.5,0,0,0,21.556,1.95Zm.432,3.406.158,1.185-3.4.487-.165-1.185ZM4.87,17.553a1.738,1.738,0,0,0,.322,3.461v4.913a3.2,3.2,0,0,1-1.131-.87,2.875,2.875,0,0,1-.651-1.076,1.723,1.723,0,0,0-2.049-1.24,1.727,1.727,0,0,0-1.3,2.213,6.933,6.933,0,0,0,1.4,2.371,7.127,7.127,0,0,0,3.721,2.111v10.58a3.454,3.454,0,0,0,3.46,3.454H36.3a3.452,3.452,0,0,0,3.454-3.454V29.435a7.127,7.127,0,0,0,3.721-2.111,6.931,6.931,0,0,0,1.4-2.371,1.742,1.742,0,1,0-3.344-.973,2.874,2.874,0,0,1-.651,1.076,3.2,3.2,0,0,1-1.131.87V21.013a1.73,1.73,0,1,0,0-3.461H4.87Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>

        <h3>Kitchen Display System</h3>
      </div>

      <div
        className="sections"
        onClick={() => setSelectedMainOption("Receipes")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49.469"
          height="49.469"
          viewBox="0 0 49.469 49.469"
        >
          <g id="surface1" transform="translate(-0.152 -0.152)">
            <path
              id="Path_59"
              data-name="Path 59"
              d="M24.891.152a24.734,24.734,0,1,0,24.73,24.738A24.727,24.727,0,0,0,24.891.152ZM22.9,5.629c.069-.008.16.008.237,0v.962a1.745,1.745,0,1,0,3.49,0V5.629A19.356,19.356,0,0,1,44.145,23.142H43a1.748,1.748,0,1,0,.183,3.49h.962A19.356,19.356,0,0,1,26.632,44.145v-.962a1.751,1.751,0,0,0-.565-1.314,1.7,1.7,0,0,0-1.36-.435,1.732,1.732,0,0,0-1.566,1.749v.962A19.356,19.356,0,0,1,5.629,26.632h.962a1.745,1.745,0,1,0,0-3.49H5.629A19.369,19.369,0,0,1,22.9,5.629Zm1.986,4.7a1.413,1.413,0,0,0-1.39,1.321L22.958,21.82a3.627,3.627,0,0,0-1.741,3.07,3.683,3.683,0,0,0,3.674,3.666c.1,0,.191-.054.3-.061l8.18,7.348A1.641,1.641,0,0,0,35.6,35.6a1.721,1.721,0,0,0,.3-2.284l-7.34-8.371v-.053a3.609,3.609,0,0,0-1.864-3.131l-.42-10.112A1.411,1.411,0,0,0,24.891,10.326Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>

        <h3>Receipes</h3>
      </div>

      <div
        className="sections"
        onClick={() => setSelectedMainOption("Settings")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53.55"
          height="53.55"
          viewBox="0 0 53.55 53.55"
        >
          <g id="surface1" transform="translate(-1.973 -1.973)">
            <path
              id="Path_60"
              data-name="Path 60"
              d="M28.744,1.973a2.063,2.063,0,0,0-2.054,2.062v.351a2.028,2.028,0,0,1-1.663,2.022c-.481.073-.946.163-1.4.269a2.028,2.028,0,0,1-2.3-1.223l-.139-.326a2.057,2.057,0,0,0-3.8,1.581l.13.326a2.016,2.016,0,0,1-.758,2.5c-.4.245-.8.505-1.182.791a2.044,2.044,0,0,1-2.6-.261l-.245-.253a2.064,2.064,0,0,0-2.918,2.918l.253.245a2.043,2.043,0,0,1,.261,2.6c-.285.383-.546.783-.791,1.182a2.039,2.039,0,0,1-2.511.766l-.318-.139A2.061,2.061,0,1,0,5.127,21.2l.326.13a2.028,2.028,0,0,1,1.223,2.3c-.106.456-.2.921-.277,1.4a2.019,2.019,0,0,1-2.014,1.663H4.035a2.058,2.058,0,1,0,0,4.117h.351a2.028,2.028,0,0,1,2.022,1.663c.073.481.163.946.269,1.4a2.028,2.028,0,0,1-1.223,2.3l-.326.139a2.057,2.057,0,0,0,1.581,3.8l.326-.13a2.025,2.025,0,0,1,2.5.758c.245.4.514.8.791,1.182a2.023,2.023,0,0,1-.261,2.6l-.253.253a2.061,2.061,0,0,0,2.918,2.91l.245-.245a2.025,2.025,0,0,1,2.6-.261c.383.277.783.538,1.182.791a2.042,2.042,0,0,1,.774,2.5l-.147.318A2.079,2.079,0,0,0,18.5,53.493a2.058,2.058,0,0,0,2.69-1.117l.139-.326a2.042,2.042,0,0,1,2.3-1.231c.456.106.921.2,1.394.277a2.019,2.019,0,0,1,1.663,2.014v.35a2.058,2.058,0,1,0,4.117,0v-.35a2.028,2.028,0,0,1,1.663-2.022c.481-.073.946-.163,1.4-.269a2.028,2.028,0,0,1,2.3,1.223l.139.326a2.057,2.057,0,1,0,3.8-1.581l-.13-.326a2.025,2.025,0,0,1,.758-2.5c.4-.253.8-.514,1.182-.791a2.032,2.032,0,0,1,2.6.253l.253.261a2.061,2.061,0,1,0,2.91-2.918l-.245-.245a2.025,2.025,0,0,1-.261-2.6c.277-.383.538-.783.791-1.19a2.035,2.035,0,0,1,2.5-.758l.318.139a2.079,2.079,0,0,0,2.707-1.117,2.058,2.058,0,0,0-1.117-2.69l-.326-.139a2.042,2.042,0,0,1-1.231-2.3c.106-.456.2-.921.277-1.394a2.019,2.019,0,0,1,2.014-1.663h.35a2.058,2.058,0,1,0,0-4.117h-.35a2.028,2.028,0,0,1-2.022-1.663c-.073-.481-.163-.946-.269-1.4a2.028,2.028,0,0,1,1.223-2.3l.326-.139a2.057,2.057,0,1,0-1.581-3.8l-.326.13a2.026,2.026,0,0,1-2.5-.758c-.253-.4-.514-.8-.791-1.19a2.021,2.021,0,0,1,.253-2.592l.261-.253a2.064,2.064,0,0,0-2.918-2.918l-.245.261a2.034,2.034,0,0,1-2.6.261c-.383-.277-.783-.546-1.19-.791a2.046,2.046,0,0,1-.758-2.511l.139-.318A2.061,2.061,0,1,0,36.3,5.127l-.139.326a2.028,2.028,0,0,1-2.3,1.223c-.456-.106-.921-.2-1.394-.277a2.019,2.019,0,0,1-1.663-2.014V4.035A2.065,2.065,0,0,0,28.744,1.973Zm0,10.3A16.487,16.487,0,0,1,45.089,26.689H32.314a4.135,4.135,0,0,0-3.57-2.062l-6.391-11.07A16.536,16.536,0,0,1,28.744,12.269Zm-9.937,3.367,6.375,11.054a4.083,4.083,0,0,0,0,4.109L18.8,41.852a16.416,16.416,0,0,1,.008-26.217ZM32.314,30.806H45.089A16.478,16.478,0,0,1,22.353,43.939l6.391-11.07A4.126,4.126,0,0,0,32.314,30.806Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>

        <h3>Settings</h3>
      </div>

      <div
        className="sections"
        onClick={() => setSelectedMainOption("Log out")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.633"
          height="45.602"
          viewBox="0 0 45.633 45.602"
        >
          <g id="surface1" transform="translate(-1.984 -1.957)">
            <path
              id="Path_61"
              data-name="Path 61"
              d="M24.77,1.957a1.984,1.984,0,0,0-1.551.785l-6.766,6.77a1.985,1.985,0,1,0,2.809,2.8l3.555-3.559V26.785a1.985,1.985,0,1,0,3.969,0V8.758l3.559,3.559a1.984,1.984,0,1,0,2.8-2.8L26.375,2.734A1.98,1.98,0,0,0,24.77,1.957ZM10.988,7.23a2,2,0,0,0-1.4.523,22.818,22.818,0,1,0,30.426,0,1.984,1.984,0,1,0-2.645,2.957,18.848,18.848,0,1,1-25.133,0,1.983,1.983,0,0,0-1.246-3.48Z"
              fill="#fff"
            />
          </g>
        </svg>

        <h3>Log out</h3>
      </div>
    </div>
  );
}

export default MenuBar;
