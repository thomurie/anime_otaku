import Home from "./home";
import Nav from "./nav";
import { Routes, Route } from "react-router-dom";

const Navagation = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Navagation;
