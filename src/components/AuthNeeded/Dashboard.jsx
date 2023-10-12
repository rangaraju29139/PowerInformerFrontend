import { useEffect, useState } from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../public/Footer";
import axios from "axios";
import DisplayAllFarms from "./DisplayAllFarms";

export default function Dashboard(props) {
  const [farmerId, setFarmerId] = useState(null);

  return (
    <>
      <NavigationBar isSecured={true}></NavigationBar>
      <DisplayAllFarms farmerId={farmerId} />
      <Footer />
    </>
  );
}
