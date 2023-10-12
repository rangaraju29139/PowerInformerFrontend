import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "./Footer";

export default function About(props) {
  return (
    <>
      <NavigationBar type="public" />
      <h1>About Page</h1>
      <Footer />
    </>
  );
}
