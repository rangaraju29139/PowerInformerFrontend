import { useState } from "react";
import NavigationBar from "../../navbar/NavigationBar";
import Footer from "../../public/Footer";
import axios from "axios";

export default function AddDevice(props) {
  const [deviceName, setDeviceName] = useState(null);

  const updateName = (event) => {
    setDeviceName(event.target.value);
    // console.log(farmName);
  };

  const updateFarmLocation = (event) => {
    // setDeviceLocation(event.target.value);
    // console.log(farmLocation);
  };

  const handleAddNewFarm = (event) => {
    event.preventDefault();

    const body = {
      farmName: deviceName,
    };

    axios
      .post("http://localhost:8080/farmers/1/farms", body)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavigationBar isSecured={true} />
      <div className="container py-4">
        <div className="row">
          <div className="mx-auto  py-3 px-4 col-6 border rounded shadow-lg">
            <div className="d-flex justify-content-center ">
              <h3 className="py-1">Add Farm Details</h3>
            </div>
            <form className="">
              <div className="form-group">
                <label for="farm-name">Farm Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="farm-name"
                  placeholder="Please Enter the Farm Name"
                  onChange={updateName}
                  required
                />
              </div>
              <div class="form-group">
                <label for="farm-location" class="form-label">
                  Farm Location Description
                </label>
                <textarea
                  class="form-control"
                  id="farm-location"
                  rows="3"
                  placeholder="Enter the Farm Location Description"
                  onChange={updateFarmLocation}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center form-group">
                <button
                  type="submit"
                  class="btn btn-success my-3 "
                  onClick={handleAddNewFarm}
                >
                  Add Farm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
