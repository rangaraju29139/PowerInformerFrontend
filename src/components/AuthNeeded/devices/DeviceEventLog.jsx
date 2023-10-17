import { useEffect, useState } from "react";
import FormatDate from "../../../utils/DateFormatter";
import moment from "moment";
import Loading from "../../common/Loading";

export default function DeviceEventLog({ deviceEventList, lastRefreshedAt }) {
  return (
    <>
      {deviceEventList == null && <Loading></Loading>}
      {deviceEventList && deviceEventList.length == 0 && (
        <>
          <div class="alert alert-warning" role="alert">
            No Device Event found for this device!!!
          </div>
        </>
      )}

      {deviceEventList && deviceEventList.length && (
        <>
          <div className="d-flex justify-content-end ml-auto ">
            <span class="badge bg-info text-dark py-2 mb-2 mx-3 px-3">
              Last Refreshed:{" "}
              {moment(lastRefreshedAt).startOf("seconds").fromNow()}
            </span>
          </div>
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
      )}
    </>
  );
}
