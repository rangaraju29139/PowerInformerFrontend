import { Route, Routes } from "react-router-dom";
import Home from "../public/Home";
import About from "../public/About";
import Contact from "../public/Contact";
import SingIn from "../public/SignIn";
import SignUp from "../public/SignUp";
import Profile from "../AuthNeeded/Profile";
import Dashboard from "../AuthNeeded/Dashboard";
import ViewFarms from "../AuthNeeded/ViewFarms";
import AddFarm from "../AuthNeeded/farms/AddFarm";
import ViewDevice from "../AuthNeeded/devices/ViewDevice";
import ManageDeviceConfiguration from "../AuthNeeded/devices/ManageDeviceConfiguration";

export default function SecuredRouter(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<SingIn />} />
        <Route exact path="/signup" element={<SignUp />} />

        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/view-farms" element={<ViewFarms />} />
        <Route exact path="/add-farm" element={<AddFarm />} />
        <Route exact path="/view-device" element={<ViewDevice />} />
        <Route
          exact
          path="/manage-device"
          element={<ManageDeviceConfiguration />}
        />
      </Routes>
    </>
  );
}
