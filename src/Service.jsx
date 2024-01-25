import React from "react";
import Card from './Card';
import Sdata from "./Sdata";

const Service = () => {
  return (
    <div className="my-5 text-center">
      <h1 className="mb-4">Service</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
              {Sdata.map((val, ind) => (
                <Card key={ind} title={val.title} imgsrc={val.imgsrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
