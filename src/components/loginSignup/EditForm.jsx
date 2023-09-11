import React from "react";
// // import { useState } from "react";
import Navbar from "./Navbar";
// import "./FarmerOnBoardinng.scss";
// // import { useUserContext } from "./UserProvider";
// // import axios from "axios";

// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { apppp } from "./firebase";

// const firestore = getFirestore(apppp);

const EditForm = () => {
  // const [editFarmerName, setEditFarmerName] = useState("");
  // const [editAddress, setEditAddress] = useState("");
  // const [editPhoneNumber, setEditPhoneNumber] = useState("");
  // const [ediitLandHolding, setEditLandHolding] = useState("");
  // const [editThisSeason, setEditThisSeason] = useState("");
  // const [editPreviousSeason, setEditPreviousSeason] = useState("");
  // const [editAadharPanCard, setEditAadharPanCard] = useState("");

  // const [editIsCropBeforeSowing, setEditIsCropBeforeSowing] = useState(false);
  // const [editIsCoverCropping, seyEditIsCoverCropping] = useState(false);
  // const [editIsIntercropping, setEditIsIntercropping] = useState(false);
  // const [editIsBioFertilizers, seyEditIsBioFertilizers] = useState(false);
  // const [editIsAgroforestry, setEditIsAgroforestry] = useState(false);

  // const { userId } = useUserContext();






  return (
    <div>
      <Navbar />
      <div className="container-fluid FarmerOnBoardinng  ">
        <div className=" row  d-flex justify-content-center align-items-center FarmerOnBoardinng-box ">
          <div className="col-12   ">
            <h4 className="text-center ">Farmers On Boardinng</h4>
            <form
              autoComplete="off"
              className="form-group"
         
            >
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

                    />
                    <label
                      className="form-check-label labels-1"
                      htmlFor="flexCheckDefault1"
                    >
                      N<sub>2</sub>(Nitrogen) Fixation crop before sowing of any
                      crop
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input form-input1"
                      type="checkbox"
                      id="flexCheckChecked2"

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
                  <button type="submit" className="btn-FarmerOnBoardinng ">
                    Edit & Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
