import axios from "axios";
import { useEffect, useState } from "react";
import DeviceEventLog from "./DeviceEventLog";

export default function DeviceEventInfo({ deviceId = 1 }) {
  const [deviceEvents, setDeviceEvents] = useState(null);
  const baseUrl = `http://localhost:8080/devices/${deviceId}/device-events`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(baseUrl)
        .then((response) => {
          console.log(response.data);
          setDeviceEvents(response.data);
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

        <div class="container py-2 mx-auto, my-auto col-8">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5 className="mx-auto">Device Event Log </h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <DeviceEventLog
                    deviceEventList={deviceEvents}
                  ></DeviceEventLog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
