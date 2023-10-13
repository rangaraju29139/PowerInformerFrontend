import { useState } from "react";

export default function FarmerDetails({ farmerId = 1 }) {
  const [editable, setEditable] = useState("");

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
                <label for="farm-name">Farm Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="farm-name"
                  placeholder="Please Enter the Farm Name"
                  required
                />
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
