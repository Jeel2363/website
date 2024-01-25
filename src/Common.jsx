import React from "react";
import { Link } from "react-router-dom";
// import web from "../src/img/5604110.jpg";
import "./index.css";

const Common = (props) => {
  return(
    <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row align-items-center justify-content-end">
                    <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 text-right">
                        <h1>
                        {props.name} <strong className="brand-name">Website</strong>
                        </h1>
                        <h2 className="my-3">
                            We are the Devs.
                        </h2>
                        <div className="mt-3">
                            <Link to={props.visit} className="btn btn-primary">
                                {props.btnName}
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img img">
                        <img src={props.img} className="img-fluid animated" alt="home img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Common;