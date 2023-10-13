import React, { useEffect, useState } from "react";

import NavigationBar from "../navbar/NavigationBar";
import Footer from "../public/Footer";
import FarmerDetails from "./farmer/FarmerDetails";

export default function Profile({ farmerId = 1 }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-0 px-0">
            <NavigationBar isSecured={true} />
            <FarmerDetails farmerId={farmerId}></FarmerDetails>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
