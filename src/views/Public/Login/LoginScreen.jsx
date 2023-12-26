import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login, getUserProfile } from "../../../services/auth.service";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../state/slices/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const LoginScreen = () => {

  const dispatch = useDispatch();
  const onSubmit = async (values, setSubmitting) => {
    try {
      const loginResponse = await login(values.email, values.password);
      console.log("loginResponse:", loginResponse);
  
      // Guardar loginResponse en localStorage
      localStorage.setItem("user", JSON.stringify(loginResponse));
      console.log("user stored in localStorage");
  
      const userProfile = await getUserProfile(loginResponse.access_token);
      // Guardar userProfile en localStorage
      localStorage.setItem("userProfile", JSON.stringify(userProfile));

      console.log("userProfile stored in localStorage");
      console.log(userProfile);
      dispatch(
        loginUser({
          access_token: loginResponse.access_token,
          refresh_token: loginResponse.refresh_token,
          userProfile: userProfile,
        })
      );
  
      // Restablecer el estado del formulario
      setSubmitting(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  



  return (
    <div>
    <h2>Acceder a la plataforma</h2>

    <div class="alert alert-warning mt-3" role="alert">
      <small>
        {" "}
        <small className="fw-bold">Usuario: </small>john@mail.com <br />{" "}
        <small className="fw-bold">Contraseña: </small> changeme
      </small>
    </div>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) =>
        onSubmit(values, setSubmitting)
      }
      validate={validate}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-danger"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-danger"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3 w-100">
          Acceder
        </button>
      </Form>
    </Formik>
  </div>
  );
};

export default LoginScreen;
