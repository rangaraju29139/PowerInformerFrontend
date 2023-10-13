import axios from "axios";
import { useEffect, useState } from "react";
import EnableDisableDevice from "./EnableDisableDevice";

export default function DisplayAllDevices({ farmerId = 1 }) {
  const [devices, setDevices] = useState(null);

  const baseUrl = "http://localhost:8080/farmers/1/devices";

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(baseUrl)
        .then((response) => {
          console.log(response.data);
          setDevices(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, 5000);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <h2 className="text-center">View All Device Status</h2>
          <div className="row mx-auto py-5 border border-light shadow-lg rounded borderdmy-2 hidden-md-up">
            {devices ? (
              <>
                {devices.map((device) => (
                  <>
                    <div key={device.deviceId} className="col-md-4 my-3">
                      <div className="card border rounded shadow ">
                        <div
                          className={`.d-inline-block card-header border rounded shadow ${
                            device.currentDeviceStatus == "AVAILABLE"
                              ? "text-white bg-success"
                              : "text-white bg-danger"
                          }`}
                        >
                          {device.deviceName}
                          <span className="mr-0 inline">
                            <EnableDisableDevice
                              deviceInfo={device}
                            ></EnableDisableDevice>
                          </span>
                        </div>
                        <div className="card-body">
                          {/** <h5 className="card-title">
                              Special title treatment
                            </h5>
                          
                          <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>**/}

                          <p className="card-text">
                            Device Current Status: {device.currentDeviceStatus}
                            <br></br>
                            Device LastHeartBeatTime:{" "}
                            {device.lastHeartBeatSignal}
                            <br></br>
                            Device Activated Status :{" "}
                            {device.activated ? "Activated" : "Not Activated"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <>
                <div className="container col-6 mx-auto my-auto px-auto,py-auto">
                  <div className="d-flex justify-content-center">
                    <h4>No Devices Available for you</h4>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="/add-Device" className="btn btn-success  ">
                      Add New Device
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
