import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/public/Home";
import Contact from "./components/public/Contact";
import SignUp from "./components/public/SignUp";
import SingIn from "./components/public/SignIn";
import About from "./components/public/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<SingIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
