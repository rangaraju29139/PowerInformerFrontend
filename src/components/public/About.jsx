import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "./Footer";

export default function About(props) {
  return (
    <>
      <NavigationBar type="public" />
      <div className="my-2 mx-2 py-2 px-2 border rounded shadow vh-100">
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            In the world of agriculture, every moment counts. Our mission is to
            provide farmers with timely, up-to-date information on electricity
            outages and restoration. With our innovative technology, we keep you
            informed about power interruptions and ensure you have the critical
            data you need to make informed decisions for your farm. Don't let
            electricity failures catch you off guard – stay ahead with our
            reliable service. Together, we're sowing the seeds of a brighter,
            more productive future for farming.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
