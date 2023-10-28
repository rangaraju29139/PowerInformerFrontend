import axios from "axios";
import { useEffect, useState } from "react";
import DeviceEventLog from "./DeviceEventLog";

export default function DeviceEventInfo({ deviceId = 1 }) {
  const [deviceEvents, setDeviceEvents] = useState(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(new Date());
  const baseUrl = `http://localhost:8080/devices/${deviceId}/device-events`;
  const API_USERNAME = `${process.env.REACT_APP_API_USERNAME}`;
  const API_PASSWORD = `${process.env.REACT_APP_API_PASSWORD}`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(baseUrl, {
          auth: {
            username: API_USERNAME,
            password: API_PASSWORD,
          },
        })
        .then((response) => {
          console.log(response.data);
          setDeviceEvents(response.data);
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
      <div className="container my-3 py-3  px-4 mx-auto border rounded shadow-lg">
        <div className="d-flex justify-content-center py-3 ">
          <h3>Device TimeLine</h3>
        </div>

        <div className="progress-stacked col-10 mx-auto">
          <div
            className="progress "
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div className="progress-bar "></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment two"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "30%" }}
          >
            <div className="progress-bar bg-success"></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "20%" }}
          >
            <div className="progress-bar bg-info"></div>
          </div>
        </div>
        <hr className="hr-blurry"></hr>

        <DeviceEventLog
          deviceEventList={deviceEvents}
          lastRefreshedAt={lastRefreshedAt}
        ></DeviceEventLog>
      </div>
    </>
  );
}
