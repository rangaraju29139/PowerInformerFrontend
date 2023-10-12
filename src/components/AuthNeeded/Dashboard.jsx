import { useEffect, useState } from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../public/Footer";
import axios from "axios";
import DisplayAllFarms from "./DisplayAllFarms";
import DisplayAllDevices from "./devices/DisplayAllDevices";

export default function Dashboard(props) {
  const [farmerId, setFarmerId] = useState(null);

  return (
    <>
      <NavigationBar isSecured={true}></NavigationBar>
      <DisplayAllDevices farmerId={farmerId}></DisplayAllDevices>
      <DisplayAllFarms farmerId={farmerId} />
      <Footer />
    </>
  );
}
