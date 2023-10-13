import NavigationBar from "../../navbar/NavigationBar";
import Footer from "../../public/Footer";

export default function ViewDevice({ deviceId = 1 }) {
  return (
    <>
      <NavigationBar isSecured={true} />

      <Footer />
    </>
  );
}
