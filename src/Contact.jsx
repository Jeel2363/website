import React, { useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import { db } from "./firebase";

const Contact = () => {
  const [err, setErr] = useState(false);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, phone, msg} = data;

        try {
          
          const docRef = await addDoc(collection(db, "contact"), {fullname:fullname ,email:email, phone:phone, msg:msg});
          console.log("Document written with ID:", docRef);
          setData({fullname: "", email: "", phone: "", msg: ""});
        } catch (error) {
          console.error("Error adding document: ", error);
          setErr(true);
        }
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">
                  Submit
                </button>
              </div>
              {err && <span>Something went wrong</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
