import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`fullname =${data.fullname},
    email =${data.email},
    phone =${data.phone},
    Message = ${data.msg}`);    
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Mobile No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="+91 (Your Number)"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
