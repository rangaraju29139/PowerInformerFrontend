import NavigationBar from "../../navbar/NavigationBar";
import Footer from "../../public/Footer";
import DeviceDetails from "./DeviceDetails";

export default function ManageDeviceConfiguration({ deviceId = 1 }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-0 px-0">
            <NavigationBar isSecured={true} />
            <DeviceDetails deviceId={deviceId}></DeviceDetails>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
