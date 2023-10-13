import axios from "axios";
import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";
import moment from "moment";

export default function DisplayAllDevices({ farmerId = 1 }) {
  const [devices, setDevices] = useState(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(new Date());

  const baseUrl = "http://localhost:8080/farmers/1/devices";

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(baseUrl)
        .then((response) => {
          console.log(response.data);
          setDevices(response.data);
          setLastRefreshedAt(new Date());
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <h2 className="text-center">View All Device Status</h2>
          <div className="row mx-auto py-5 border border-light shadow-lg rounded borderdmy-2 hidden-md-up">
            <div className="ml-auto ">
              Last Refressed At:{" "}
              {moment(lastRefreshedAt).startOf("seconds").fromNow()}
            </div>
            {devices ? (
              <>
                {devices.map((device) => (
                  <>
                    <div key={device.deviceId} className="col-md-4 my-3">
                      <div className="card border rounded shadow ">
                        <div
                          className={`.d-inline-block card-header border  rounded shadow ${
                            device.currentDeviceStatus === "AVAILABLE"
                              ? "text-white bg-success"
                              : "text-white bg-danger"
                          }`}
                        >
                          <span className="d-flex justify-content-center">
                            {device.deviceName}
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
                            <div className="alert alert-primary">
                              {device.currentDeviceStatus === "AVAILABLE"
                                ? "Device Online Since : " +
                                  FormatDate(device.lastHeartBeatSignal)
                                : "Device Offline Since : " +
                                  FormatDate(device.lastHeartBeatSignal)}
                            </div>
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
