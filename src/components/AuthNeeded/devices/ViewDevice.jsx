import NavigationBar from "../../navbar/NavigationBar";
import Footer from "../../public/Footer";
import DeviceEventInfo from "./DeviceEventInfo";

export default function ViewDevice({ deviceId = 1 }) {
  return (
    <>
      <NavigationBar isSecured={true} />
      <DeviceEventInfo deviceId={deviceId} />

      <Footer />
    </>
  );
}
