import axios from "axios";
import { useEffect, useState } from "react";

export default function FarmerDetails({ farmerId = 1 }) {
  const [farmerData, setFarmerData] = useState(null);
  const baseUrl = `http://localhost:8080/farmers/${farmerId}`;
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    function fetchData() {
      axios
        .get(baseUrl)
        .then((response) => {
          setFarmerData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="mx-auto  py-3 px-4 col-6 border rounded shadow-lg">
            <div className="d-flex justify-content-center ">
              <h3 className="py-1">Farmer Details</h3>
            </div>
            <form className="">
              <div className="form-group">
                {Object.keys(farmerData).map((key) => (
                  <>
                    <label for={key}>{key.toLocaleUpperCase()}</label>
                    <input
                      type="text"
                      className="form-control"
                      id={key}
                      placeholder={`Please Enter ${key.toLocaleUpperCase()}`}
                      required
                    />
                  </>
                ))}
              </div>

              <div className="d-flex justify-content-center form-group">
                <button type="submit" class="btn btn-success my-3 ">
                  Add Farm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
