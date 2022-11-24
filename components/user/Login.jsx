import React, { useState } from "react";
// import userService from "../../services/userService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import toastr from "toastr";

const basicSchema = Yup.object().shape({
  email: Yup.string().email().min(2).max(100).required("Is Required"),
  password: Yup.string().min(8).max(100).required("Is Required"),
});

// ====================================== FORM DATA ===============================================
function Login() {
  const [userLoginData] = useState({ email: "chrisivy@gmail.com", password: "Chris1234$", tenantId: "U03RN2V7X6J" }); // THE SETSTATE IS A FUNC TO USE LATER

  //   const onFormFieldChange = (e) => {
  //     const target = e.target;
  //     const newUserValue = target.value;
  //     const nameOfField = target.name;
  //     console.log({ nameOfField, newUserValue });
  //     setUserLoginData((prevState) => {
  //       const newUserObject = {
  //         ...prevState,
  //       };
  //       newUserObject[nameOfField] = newUserValue;
  //       return newUserObject;
  //     });
  //   };

  // ====================================== AJAX CALL ======================================

  //   const onClickLogin = (e) => {
  //     e.preventDefault();
  //     let payload = userLoginData;

  //     userService.login(payload).then(onLoginSuccess).catch(onLoginError);
  //   };

  //   const onLoginSuccess = (response) => {
  //     console.log("you did it!", response);
  //     toastr.success("You are logged in!!!");
  //   };
  //   const onLoginError = (error) => {
  //     console.log("You need to log in.", error);
  //     toastr.error("Please enter login credentials");
  //   };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Login</h1>
      </div>
      <div className="container mt-5 fs-2">
        <div className="row">
          <div className="col-md-5">
            <Formik enableReinitialize={true} initialValues={userLoginData} onSubmit={handleSubmit} validationSchema={basicSchema}>
              {/* onSubmit={handleSubmit} validationSchema={basicSchema} */}
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="has-error"></ErrorMessage>
                  <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="has-error"></ErrorMessage>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Form>
            </Formik>
            {/* ORIGINAL FORM START
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="text" className="form-control  form-control-lg" id="email" name="email" placeholder="Enter Your Email Address" value={userLoginData.email} onChange={onFormFieldChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control  form-control-lg" id="password" name="password" placeholder="Enter your password" value={userLoginData.password} onChange={onFormFieldChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onClickLogin}>
                  Submit
                </button>
              </form>
               ORIGINAL FORM  END*/}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
