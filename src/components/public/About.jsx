import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "./Footer";

export default function About(props) {
  return (
    <>
      <NavigationBar type="public" />
      <div className="d-flex justify-content-center align-items-center">
        <div className=" my-2 mx-2 py-2 px-2  border rounded shadow w-75">
          <div className="d-flex justify-content-center ">
            <h2>About PowerInformer</h2>
          </div>
          <div className=" mx-auto">
            <p className="lead mb-4 px-2 py-2 mx-auto mh-100">
              In the world of agriculture, every moment counts. Our mission is
              to provide farmers with timely, up-to-date information on
              electricity outages and restoration. With our innovative
              technology, we keep you informed about power interruptions and
              ensure you have the critical data you need to make informed
              decisions for your farm. Don't let electricity failures catch you
              off guard – stay ahead with our reliable service. Together, we're
              sowing the seeds of a brighter, more productive future for
              farming.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
