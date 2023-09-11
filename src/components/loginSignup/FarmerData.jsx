import React, { useEffect, useState } from "react";
import "./FarmerData.scss";
import Navbar from "./Navbar";
// import { useUserContext } from "./UserProvider";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { apppp } from "./firebase";
const firestore = getFirestore(apppp);

const FarmerData = () => {
  const [accessData, setAccessData] = useState([]);
  // const { userId } = useUserContext();
  const userId = localStorage.getItem("uid");

  const listdata = () => {
    console.log(userId);
    return getDocs(
      collection(firestore, `FarmerOnBoardinng/${userId}/Farmer_reg`)
    );
  };

  useEffect(() => {
    console.log("id is", userId);
    listdata().then((data) => setAccessData(data.docs));
  }, []);

  return (
    <div className="farmerData">
      <Navbar />
      <div className="container-fluid mt-5 ">
        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered tbl">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>FarmerName</th>
                <th>Address</th>
                <th>phoneNumber</th>
                <th>Aadhar/PanCard </th>
              </tr>
            </thead>
            <tbody>
              {accessData.map((data, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{data.data().farmerName}</td>
                  <td>{data.data().address}</td>
                  <td>{data.data().phoneNumber}</td>
                  <td>{data.data().aadharPanCard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FarmerData;
