import React from "react";
// import { Link } from "react-router-dom";
import web from "../src/img/5604110.jpg";
import "./index.css";
import Common from "./Common";

const Home = () => {
  return(
    <>
         <Common 
            name="This is your"
            visit="/service"
            btnName="Get Started"
            img={web}
         />
    </>
  );
};

export default Home;
