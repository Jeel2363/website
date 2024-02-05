import { React, useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import "./index.scss";
import {auth} from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
        const navigate = useNavigate();
        const [data, setData] = useState({
        fname: "",
        email: "",
        uname: "",
        city: "",
        state: "",
        zcode: "",
        password: ""
      });
      const [err, setErr] = useState(false);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setData((preState) => {
          return {
            ...preState,
            [name]: value,
          };
        });
      };

    const handleSubmit = async (e) => {
      
        e.preventDefault();
        const { fname, email, uname, city, state, zcode, password} = data;

        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const docRef = await addDoc(collection(db, "users"), {fname:fname ,email:email, uname:uname, city:city, state:state, zcode:zcode, password:password});
          console.log("Document written with ID:", docRef);
          setData({fname: "", email: "", uname: "", city: "", state: "", zcode: "", password: ""});
          navigate("/login");
        } catch (error) {

          console.error("Error adding document: ", error);
          setErr(true);
        }
      };

    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Sign Up</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Full name</label>
    <input type="text" className="form-control" name="fname" value={data.fname} onChange={handleInputChange} id="validationCustom01" placeholder="Mark Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" value={data.email} onChange={handleInputChange} id="validationCustom02"  placeholder="mark@gmail.com" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" name="uname" value={data.uname} onChange={handleInputChange} id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Mark123" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" name="city" value={data.city} onChange={handleInputChange} id="validationCustom03" placeholder="Surat" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select"  name="state" value={data.state} onChange={handleInputChange} id="validationCustom04" required>
      <option disabled value="">Choose...</option>
      <option>Gujarat</option>
      <option>Maharastra</option>
      <option>Delhi</option>
      <option>Goa</option>
      <option>Rajsthan</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" name="zcode" value={data.zcode} onChange={handleInputChange} id="validationCustom05" placeholder="395004" required />
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={data.password} onChange={handleInputChange} id="validationCustom06" placeholder="Password here..." required />
    <div className="invalid-feedback">
      Please provide a valid password
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary " type="submit">Sign up</button>
  </div>
  {err && <span>Something went wrong</span>}
</form>
           </div>
           </div> 
          </div>
        </>
    );
};

export default Signup;