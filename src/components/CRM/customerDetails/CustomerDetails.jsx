import React, { useEffect, useState } from "react";
import "./customerDetails.scss";
import * as actions from "../../../State Manager/Actions/Basic Crud Action/CrudAction";
import dummyUserData from "./dummyUserData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import { connect } from "react-redux";
import LoadingScreen from "../../loadingScreen/LoadingScreen";

function CustomerDetails({ fetchALLDataList, dataList }) {
  useEffect(() => {
    fetchALLDataList();
  }, []);

  const [dataFromServer, setDataFromServer] = useState([]);

  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (dataList?.length === 0) {
      setloading(true);
      console.log("loadingg.........................");
    } else if (dataList?.length > 0) {
      setloading(false);
      console.log("loading compleated");
      setDataFromServer(dataList);
    } else {
    }
  }, [dataList]);

  console.log("THE OTIGINAL DATA IS", dataFromServer);

  const pageNumber = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(7);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = dataFromServer.slice(indexOfFirstPost, indexOfLastPost);

  for (let i = 1; i <= Math.ceil(dataFromServer.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="customer_details">
        <div className="customerdetails__headder">
          <div className="customerdetails__headder__leftside">
            <h2>Customer Details</h2>
          </div>
          <div className="customerdetails__headder__rightside">
            <div className="status__btn">
              <CircleIcon className="expired" />
              <h5>Expired</h5>
            </div>
            <div className="status__btn">
              <CircleIcon className="activeCustomer" />
              <h5>Active</h5>
            </div>
            <div className="status__btn">
              <CircleIcon className="inActiveCustomer" />
              <h5>Inactive</h5>
            </div>
          </div>
        </div>

        <div className="customerdetails__body">
          <table className="table__three">
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Email Id</th>
                <th>Phone</th>
                <th>Loyality Customer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((data, index) => (
                <tr key={index}>
                  <td data-label="Customer Id"></td>
                  <td data-label="Customer Name">{data.name}</td>
                  <td data-label="Address">Kayattal house</td>
                  <td data-label="Email Id">{data.email}</td>
                  <td data-label="Phone">{data.phone}</td>
                  <td data-label="Loyality Customer">yes</td>
                  <td
                    data-label="Status"
                    className="status__icons active inactive expired"
                  >
                    <CircleIcon className="activeCustomer" />
                    <h5>Expired</h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* paginate button pops here */}
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={pageNumber.length}
                shape="rounded"
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
                defaultPage={currentPage}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  dataList: state.BasicCrudReducer.dataList,
});

const mapDispatchToProp = {
  fetchALLDataList: actions.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProp)(CustomerDetails);
