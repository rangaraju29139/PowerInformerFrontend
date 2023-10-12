import NavigationBar from "../navbar/NavigationBar";
import Footer from "../public/Footer";
import DisplayAllFarms from "./DisplayAllFarms";

export default function ViewFarms({ farmerId = 1 }) {
  return (
    <>
      <NavigationBar isSecured={true} />
      <DisplayAllFarms farmerId={farmerId}></DisplayAllFarms>
      <Footer />
    </>
  );
}
