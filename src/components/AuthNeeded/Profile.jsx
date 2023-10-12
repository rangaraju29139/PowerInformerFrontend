import axios from "axios";
import React, { useEffect, useState } from "react";

import NavigationBar from "../navbar/NavigationBar";
import Footer from "../public/Footer";

export default function Profile(props) {
  //   const SERVER_HOSTNAME = process.env.REACT_APP_BACKEND_SERVER_HOSTNAME;
  //   const SERVER_PORT = process.env.REACT_APP_BACKEND_SERVER_PORT;
  //   const BASE_URL = SERVER_HOSTNAME + ":" + SERVER_PORT + "/farmers/1";

  // const BASE_URL = "http://localhost:8080/farmers/1";
  // console.log(BASE_URL);
  // const [farmerData, setFarmerData] = useState(null);

  // useEffect(() => {
  //   axios.get(BASE_URL).then((response) => {
  //     setFarmerData(response.data);
  //   });
  // }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-0 px-0">
            <NavigationBar isSecured={true} />

            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
