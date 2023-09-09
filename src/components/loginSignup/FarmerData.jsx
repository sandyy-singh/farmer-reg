import React, { useEffect, useState } from "react";

import { useUserContext } from "./UserProvider";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { apppp } from "./firebase";
const firestore = getFirestore(apppp);

const FarmerData = () => {
  const [accessData, setAccessData] = useState([]);
  const { userId } = useUserContext();

  const listdata = () => {
    console.log(userId);
    return getDocs(collection( firestore,`FarmerOnBoardinng/${userId}/Farmer_reg`));
  };

  useEffect(() => {
    console.log("id is",userId);
    listdata().then((data) => setAccessData(data.docs));
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>FarmerName</th>
            <th>Address</th>
            <th>phoneNumber</th>
            <th>Aadhar/PanCard </th>
            <th>LandHolding</th>
            <th>thisSeason</th>
            <th>previousSeason</th>
            
          </tr>
        </thead>
        <tbody>
          {accessData.map((data, index) => (
            <tr key={index+1}>
              <td>{index+1}</td>
              <td>{data.data().farmerName}</td>
              <td>{data.data().address}</td>
              <td>{data.data().phoneNumber}</td>
              <td>{data.data().aadharPanCard}</td>
              <td>{data.data().landHolding}</td>
              <td>{data.data().thisSeason}</td>
              <td>{data.data().previousSeason}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerData;
