import NavigationBar from "../navbar/NavigationBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function Home(props) {
  return (
    <>
      <NavigationBar isSecured={false} />
      <HeroSection />
      <Footer />
    </>
  );
}
