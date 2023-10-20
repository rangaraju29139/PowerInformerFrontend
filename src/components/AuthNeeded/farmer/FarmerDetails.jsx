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

  const handleEditButton = (event) => {
    event.preventDefault();
    setIsEditable(true);
  };

  async function saveData() {
    await axios
      .put(baseUrl, farmerData)
      .then((response) => {
        setFarmerData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSaveButton = (event) => {
    event.preventDefault();
    const baseUrl = `http://localhost:8080/farmers/${farmerId}`;
    saveData();
    setIsEditable(false);
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...farmerData, [name]: value };
    setFarmerData({ ...updatedFormData });
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="mx-auto  py-3 px-4 col-6 border rounded shadow-lg">
            <div className="d-flex justify-content-center ">
              <h3 className="py-1">Farmer Details</h3>
            </div>
            <form className="">
              <div className="d-flex justify-content-end form-group mr-3">
                {isEditable ? (
                  <button
                    type="submit"
                    class="btn btn-success my-3 "
                    onClieck={(event) => handleSaveButton(event)}
                  >
                    Save Details
                  </button>
                ) : (
                  <button
                    s
                    class="btn btn-primary my-3 "
                    onClick={handleEditButton}
                  >
                    Edit Details
                  </button>
                )}
              </div>

              {farmerData &&
                Object.keys(farmerData).map((key) => (
                  <>
                    <div className="form-group" hidden={key == "farmerId"}>
                      <label for={key}>{key.toLocaleUpperCase()}</label>
                      <input
                        type={`${key == "password" ? "password" : "text"}`}
                        className="form-control"
                        id={key}
                        name={key}
                        placeholder={`Please Enter ${key.toLocaleUpperCase()}`}
                        required
                        value={farmerData[key]}
                        disabled={!isEditable}
                        onChange={(event) => handleFieldChange(event)}
                      />
                    </div>
                  </>
                ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
