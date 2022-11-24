import React, { useState } from "react";
import userService from "../../services/userService";
import toastr from "toastr";

function Register() {
  //   ======================= FORM DATA ================================

  const [userRegistration, setUserRegistration] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    profileUrl: "",
  });

  const onFormFieldChange = (e) => {
    const target = e.target;
    const newUserValue = target.value;
    const nameOfField = target.name;
    console.log({ nameOfField, newUserValue });
    setUserRegistration((prevState) => {
      const newUserObject = {
        ...prevState,
      };
      newUserObject[nameOfField] = newUserValue;
      return newUserObject;
    });
  };

  //   ========================== ON CLICK EVENTS =====================================
  const onClickRegister = (e) => {
    e.preventDefault();

    userService.register(userRegistration).then(onRegisterSuccess).catch(onRegisterError);
  };

  const onRegisterSuccess = (response) => {
    console.log("you did it!", response);
    toastr.success("You are logged in!!!");
  };

  const onRegisterError = (err) => {
    console.log("you did it!", err);
    toastr.success("You are logged in!!!");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Register</h1>
        <div className="col-12 my-1"></div>
      </div>
      <div className="ivy-added">
        <div className="container mt-5 fs-2">
          <div className="row">
            <div className="col-md-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="text" className="form-control  form-control-lg" id="email" name="email" placeholder="Enter Your Email Address" value={userRegistration.email} onChange={onFormFieldChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control  form-control-lg" id="firstName" name="firstName" placeholder="Enter Your First Name" value={userRegistration.firstName} onChange={onFormFieldChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control  form-control-lg" id="lastName" name="lastName" placeholder="Enter Your Last Name" value={userRegistration.lastName} onChange={onFormFieldChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control  form-control-lg" id="password" name="password" placeholder="Enter Your Password" value={userRegistration.password} onChange={onFormFieldChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="password-confirm" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control  form-control-lg" id="passwordConfirm" name="passwordConfirm" placeholder="Re-Enter Your Password" value={userRegistration.passwordConfirm} onChange={onFormFieldChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Profile Url
                  </label>
                  <input type="text" className="form-control  form-control-lg" id="profileUrl" name="profileUrl" placeholder="Provide a Url to an Image" value={userRegistration.profileUrl} onChange={onFormFieldChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={onClickRegister}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="ivy-added"></div>
      <hr />
    </React.Fragment>
  );
}

export default Register;
