import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./FarmerData.scss";
import Navbar from "./Navbar";


import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { apppp } from "./firebase";
const firestore = getFirestore(apppp);

const FarmerData1 = () => {

  const userId = localStorage.getItem("uid");
  // const navigate = useNavigate();

  const [editFarmerName, setEditFarmerName] = useState();
  const [editAddress, setEditAddress] = useState();
  const [editPhoneNumber, setEditPhoneNumber] = useState();

  const [ediitLandHolding, setEditLandHolding] = useState();
  const [editThisSeason, setEditThisSeason] = useState();
  const [editPreviousSeason, setEditPreviousSeason] = useState();

  const [editAadharPanCard, setEditAadharPanCard] = useState();
  const [editIsCropBeforeSowing, setEditIsCropBeforeSowing] = useState();
  const [editIsCoverCropping, setEditIsCoverCropping] = useState();

  const [editIsIntercropping, setEditIsIntercropping] = useState();
  const [editIsBioFertilizers, seyEditIsBioFertilizers] = useState();
  const [editIsAgroforestry, setEditIsAgroforestry] = useState();
  const [id, setId] = useState();
  const [updateForm, setUpdateForm] = useState(false);

  //access all data from fire store
  const collectionRef = collection(
    firestore,
    `FarmerOnBoardinng/${userId}/Farmer_reg`
  );
  const [fromDbVal, setfromDbVal] = useState([]);
  useEffect(() => {
    const listdata = async () => {
      const dbVal = await getDocs(collectionRef);
      setfromDbVal(dbVal.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log("fromDbVal", fromDbVal);
    };
    listdata();
  }, );



  const HandleEditVal = async (
    id,
    farmerName,
    address,
    phoneNumber,
    aadharPanCard,
    landHolding,
    previousSeason,
    thisSeason,
    isAgroforestry,
    isBioFertilizers,
    isCoverCropping,
    isCropBeforeSowing,
    isIntercropping
  ) => {
    setEditFarmerName(farmerName);
    setEditAddress(address);
    setEditPhoneNumber(phoneNumber);
    setEditAadharPanCard(aadharPanCard);
    setEditLandHolding(landHolding);
    setEditPreviousSeason(previousSeason);
    setEditThisSeason(thisSeason);

    setEditIsCropBeforeSowing(isCropBeforeSowing);
    setEditIsCoverCropping(isCoverCropping);
    setEditIsIntercropping(isIntercropping);
    seyEditIsBioFertilizers(isBioFertilizers);
    setEditIsAgroforestry(isAgroforestry);
    setId(id);
    setUpdateForm(true);
  };

  const editAndSave = async () => {
    const updateData = doc(
      firestore,
      `FarmerOnBoardinng/${userId}/Farmer_reg`,
      id
    );

    try {
      const snpshot = await updateDoc(updateData, {
        farmerName: editFarmerName,
        address: editAddress,
        phoneNumber: editPhoneNumber,
        landHolding: ediitLandHolding,
        thisSeason: editThisSeason,
        previousSeason: editPreviousSeason,
        aadharPanCard: editAadharPanCard,
        isCropBeforeSowing: editIsCropBeforeSowing,
        isCoverCropping: editIsCoverCropping,
        isIntercropping: editIsIntercropping,
        isBioFertilizers: editIsBioFertilizers,
        isAgroforestry: editIsAgroforestry,
      });
      console.log(snpshot);
      alert("thank for update")

    } catch (err) {
      console.log(err);
      alert("something going wrong")
    }

    
  };

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fromDbVal.map((data, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{data.farmerName}</td>
                  <td>{data.address}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.aadharPanCard}</td>
                  <td>
                    <button
                      onClick={() =>
                        HandleEditVal(
                          data.id,
                          data.farmerName,
                          data.address,
                          data.phoneNumber,
                          data.aadharPanCard,
                          data.landHolding,
                          data.previousSeason,
                          data.thisSeason,
                          data.isAgroforestry,
                          data.isBioFertilizers,
                          data.isCoverCropping,
                          data.isCropBeforeSowing,
                          data.isIntercropping
                        )
                      }
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {updateForm && (
        <div className="editForm">
          <div className="container-fluid FarmerOnBoardinng  ">
            <div className=" row  d-flex justify-content-center align-items-center FarmerOnBoardinng-box ">
              <div className="col-12   ">
                <h4 className="text-center ">Farmers On Boardinng</h4>
                <form autoComplete="off" className="form-group">
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="farmerName">
                        Farmer Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs "
                        id="farmerName"
                        placeholder="Enter your farmer Name"
                        value={editFarmerName}
                        onChange={(e) => setEditFarmerName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="address"
                        placeholder="Enter your address"
                        value={editAddress}
                        onChange={(e) => setEditAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="phoneNumber">
                        phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="phoneNumber"
                        placeholder="Enter your Phone Number"
                        value={editPhoneNumber}
                        onChange={(e) => setEditPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="landHolding">
                        Total Land Holding(in Acres )
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="landHolding"
                        placeholder="Enter your land Holding"
                        value={ediitLandHolding}
                        onChange={(e) => setEditLandHolding(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="thisSeason">
                        Crop Sowing this season
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="thisSeason"
                        placeholder="Enter Crop Sowing this season"
                        value={editThisSeason}
                        onChange={(e) => setEditThisSeason(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1 " htmlFor="previousSeason">
                        Crop Sowing previous season
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="previousSeason"
                        placeholder="Enter Crop Sowing previous season"
                        value={editPreviousSeason}
                        onChange={(e) => setEditPreviousSeason(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="aadharPanCard">
                        Aadhar/Pan Card Number
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="aadharPanCard"
                        placeholder="Enter your Phone No."
                        value={editAadharPanCard}
                        onChange={(e) => setEditAadharPanCard(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <div>
                        <span>Farming Practices</span>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          id="flexCheckDefault1"
                          value={editIsCropBeforeSowing}
                          onChange={(e) => setEditIsCropBeforeSowing(true)}
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckDefault1"
                        >
                          N<sub>2</sub>(Nitrogen) Fixation crop before sowing of
                          any crop
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          id="flexCheckChecked2"
                          value={editIsCoverCropping}
                          onChange={(e) => setEditIsCoverCropping(true)}
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckChecked2"
                        >
                          Cover-cropping
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          value={editIsIntercropping}
                          onChange={(e) => setEditIsIntercropping(true)}
                          id="flexCheckDefault3"
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckDefault3"
                        >
                          Intercropping
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-labels-1"
                          type="checkbox"
                          id="flexCheckDefault4"
                          value={editIsBioFertilizers}
                          onChange={(e) => seyEditIsBioFertilizers(true)}
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckDefault4"
                        >
                          Use of Vermi-compost and other bio-fertilizers
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          value={editIsAgroforestry}
                          onChange={(e) => setEditIsAgroforestry(true)}
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckDefault5"
                        >
                          Agroforestry (planting in the fields while cropping
                          farming)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-2   ">
                    <div className="col-8 offset-2  submitOnBoardinng  ">
                      <button
                        onClick={editAndSave}
                        className="btn-FarmerOnBoardinng "
                      >
                        Edit & Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerData1;
