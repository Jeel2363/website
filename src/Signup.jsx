import { React, useState } from "react";
import "./index.css";

const Signup = () => {

    const [data, setData] = useState({
        fname: "",
        lname: "",
        uname: "",
        city: "",
        state: "",
        zcode: "",
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
        alert(`fullname =${data.fname} ${data.lname}
Username =${data.uname}
City =${data.city} , ${data.zcode}
State = ${data.state}`)    
      };

    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Sign Up</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form class="row g-3 needs-validation" onSubmit={formSubmit} novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" name="fname" value={data.fname} onChange={InputEvent} id="validationCustom01"  placeholder="Mark" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" name="lname" value={data.lname} onChange={InputEvent} id="validationCustom02"  placeholder="Otto" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" name="uname" value={data.uname} onChange={InputEvent} id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Mark123" required />
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" name="city" value={data.city} onChange={InputEvent} id="validationCustom03" placeholder="Surat" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" name="state" value={data.state} onChange={InputEvent} id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Gujarat</option>
      <option>Maharastra</option>
      <option>Delhi</option>
      <option>Goa</option>
      <option>Rajsthan</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" name="zcode" value={data.zcode} onChange={InputEvent} id="validationCustom05" placeholder="395004" required />
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary " type="submit">Sign up</button>
  </div>
</form>
           </div>
           </div> 
          </div>
        </>
    );
};

export default Signup;