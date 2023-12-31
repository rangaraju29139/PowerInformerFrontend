import axios from "axios";
import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";
import moment from "moment";
import Loading from "../../common/Loading";
import Skeleton from "react-loading-skeleton";

export default function DisplayAllDevices({ farmerId = 1 }) {
  const [devices, setDevices] = useState(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(new Date());

  const API_USERNAME = `${process.env.REACT_APP_API_USERNAME}`;
  const API_PASSWORD = `${process.env.REACT_APP_API_PASSWORD}`;
  const baseUrl = "http://localhost:8080/farmers/1/devices";

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(
          baseUrl,

          {
            auth: {
              username: API_USERNAME,
              password: API_PASSWORD,
            },
          }
        )
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
            <div className="d-flex justify-content-end ml-auto ">
              <span class="badge bg-info text-dark py-2 mx-3 px-3">
                Last Refreshed:{" "}
                {moment(lastRefreshedAt).startOf("seconds").fromNow()}
              </span>
            </div>

            <>
              {devices &&
                devices.map((device) => (
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
                            {device.deviceName || <Skeleton></Skeleton>}
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
                                    FormatDate(device.lastHeartBeatSignal) || (
                                    <Skeleton></Skeleton>
                                  )}
                            </div>
                            <br></br>
                            Device Activated Status :{" "}
                            {device.activated
                              ? "Activated"
                              : "Not Activated" || <Skeleton></Skeleton>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </>

            {devices && devices.length == 0 && (
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

            {devices == null && <Loading></Loading>}
          </div>
        </div>
      </div>
    </>
  );
}
