import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";

export default function DeviceEventLog({ deviceEventList }) {
  const [deviceEventExists, setDeviceEventsExists] = useState(
    validateDeviceEventList(false)
  );

  const validateDeviceEventList = (deviceEventList) => {
    if (deviceEventList == null || deviceEventList.length > 0) {
      setDeviceEventsExists(true);
      console.log("deviceEventList: " + deviceEventList);
    } else {
      setDeviceEventsExists(false);
      console.log("deviceEventList: " + deviceEventList);
    }
  };
  validateDeviceEventList(deviceEventList);

  useEffect(
    (deviceEventList) => {
      validateDeviceEventList(deviceEventList);
    },
    [deviceEventList]
  );

  const handleTableRowColor = (deviceEvent) => {
    if (deviceEvent.eventType === "OFF_TO_ON") {
      return "table-success";
    } else if (deviceEvent.eventType === "ON_TO_OFF") {
      return "table-danger";
    }
  };

  return (
    <>
      {deviceEventExists ? (
        <>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Event Time: </th>
                  <th scope="col">Event Type</th>
                </tr>
              </thead>
              <tbody>
                {deviceEventList.map((deviceEvent) => {
                  return (
                    <>
                      <tr
                        key={deviceEvent.id}
                        className={handleTableRowColor(deviceEvent.eventType)}
                      >
                        <td>{FormatDate(deviceEvent.eventTime)}</td>
                        <td>{deviceEvent.eventType}</td>
                      </tr>
                      ;
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div class="alert alert-primary" role="alert">
            No Device Event found for this device!!!
          </div>
        </>
      )}
    </>
  );
}
