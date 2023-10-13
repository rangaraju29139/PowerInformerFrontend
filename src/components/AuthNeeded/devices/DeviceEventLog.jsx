import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";

export default function DeviceEventLog({ deviceEventList }) {
  return (
    <>
      {deviceEventList && deviceEventList.length ? (
        <>
          <div>
            <table class="table table-hover">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Event Time </th>
                  <th scope="col">Event Type </th>
                </tr>
              </thead>
              <tbody>
                {[...deviceEventList].reverse().map((deviceEvent) => {
                  return (
                    <>
                      <tr
                        key={deviceEvent.id}
                        className={`${
                          deviceEvent.eventType == "OFF_TO_ON"
                            ? "table-success"
                            : "table-danger"
                        }`}
                      >
                        <td>{FormatDate(deviceEvent.eventTime)}</td>
                        <td>{deviceEvent.eventType}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div class="alert alert-warning" role="alert">
            No Device Event found for this device!!!
          </div>
        </>
      )}
    </>
  );
}
