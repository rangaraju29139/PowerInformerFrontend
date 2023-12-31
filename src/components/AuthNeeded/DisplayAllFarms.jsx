import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

export default function DisplayAllFarms({ farmerId = 1 }) {
  const [farms, setFarms] = useState(null);
  const baseUrl = "http://localhost:8080/farmers/1/farms";
  const [lastRefreshedAt, setLastRefreshedAt] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(baseUrl, {
          auth: {
            username: "powerinformer",
            password: "Password@Powerinformer",
          },
        })
        .then((response) => {
          console.log(response.data);
          setFarms(response.data);
          setLastRefreshedAt(new Date());
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <h2 className="text-center">View All Farms</h2>
          <div className="row mx-auto py-5 border border-light shadow-lg rounded borderdmy-2 hidden-md-up">
            <div className="d-flex justify-content-end ml-auto ">
              <span class="badge bg-info text-dark py-2 mx-3 px-3">
                Last Refreshed:{" "}
                {moment(lastRefreshedAt).startOf("seconds").fromNow()}
              </span>
            </div>

            {farms &&
              farms.length > 0 &&
              farms.map((farm) => (
                <>
                  <div key={farm.id} className="col-md-4 my-3">
                    <div className="card border rounded shadow">
                      <div className="card-header">{farm.farmName}</div>
                      <div className="card-body">
                        {/** <h5 className="card-title">
                            Special title treatment
                          </h5>
                        
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>**/}

                        <p className="card-text">
                          Location: {farm.locationDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            {farms == null && (
              <>
                <div
                  class="spinner-grow"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            )}

            {farms && farms.length == 0 && (
              <>
                <div className="container col-6 mx-auto my-auto px-auto,py-auto">
                  <div className="d-flex justify-content-center">
                    <h4>No Farms Available for you</h4>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="/add-farm" className="btn btn-success  ">
                      Add Farm
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
