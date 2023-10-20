import axios from "axios";
import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";
import Loading from "../../common/Loading";

export default function DeviceDetails({ deviceId = 1 }) {
  const [deviceData, setDeviceData] = useState(null);
  const baseUrl = `http://localhost:8080/devices/${deviceId}`;
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    function fetchData() {
      axios
        .get(baseUrl)
        .then((response) => {
          setDeviceData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  const handleEditButton = (event) => {
    event.preventDefault();
    setIsEditable(true);
  };

  async function saveData(baseUrl) {
    await axios
      .put(baseUrl, deviceData)
      .then((response) => {
        setDeviceData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSaveButton = (event) => {
    event.preventDefault();
    const baseUrl = `http://localhost:8080/devices/${deviceId}`;
    saveData(baseUrl);
    setIsEditable(false);
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...deviceData, [name]: value };
    setDeviceData({ ...updatedFormData });
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="mx-auto  py-3 px-4 col-6 border rounded shadow-lg">
            <div className="d-flex justify-content-center ">
              <h3 className="py-1">Device Details</h3>
            </div>
            {deviceData == null && <Loading></Loading>}

            {deviceData && deviceData.length === 0 && (
              <>
                <div class="alert alert-warning" role="alert">
                  No Device Event found for this device!!!
                </div>
              </>
            )}
            {deviceData && deviceData.length > 0 && (
              <>
                <form className="">
                  <div className="d-flex justify-content-end form-group mr-3">
                    {isEditable ? (
                      <button
                        type="submit"
                        class="btn btn-success my-3 "
                        onClieck={(event) => handleSaveButton(event)}
                      >
                        Save Details
                      </button>
                    ) : (
                      <button
                        s
                        class="btn btn-primary my-3 "
                        onClick={handleEditButton}
                      >
                        Edit Details
                      </button>
                    )}
                  </div>

                  {deviceData &&
                    Object.keys(deviceData).map((key) => (
                      <>
                        <div className="form-group" hidden={key == "farmerId"}>
                          <label for={key}>{key.toLocaleUpperCase()}</label>
                          <input
                            type={`${key == "password" ? "password" : "text"}`}
                            className="form-control"
                            id={key}
                            name={key}
                            placeholder={`Please Enter ${key.toLocaleUpperCase()}`}
                            required
                            value={`${
                              key.toLocaleUpperCase() == "LASTHEARTBEATSIGNAL"
                                ? FormatDate(deviceData[key])
                                : deviceData[key]
                            }`}
                            disabled={!isEditable}
                            onChange={(event) => handleFieldChange(event)}
                          />
                        </div>
                      </>
                    ))}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
