import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createUser } from "../../../services/auth.service";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const RegisterScreen = () => {

  const [alert, setAlert] = useState(null);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const newUser = await createUser({
        name: values.name,
        email: values.email,
        password: values.password,
        avatar: "https://picsum.photos/800",
      });

      console.log(newUser);
      setAlert({ type: "success", message: "Usuario creado exitosamente." });

    } catch (error) {
      console.error("Error al crear usuario:", error);
      setAlert({ type: "error", message: "Fallo el registro. Inténtalo de nuevo." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>RegisterScreen</h2>
      {alert && (
        <div style={{ color: alert.type === "error" ? "red" : "green" }}>
          {alert.message}
        </div>
      )}
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        {({ isSubmitting }) => (
          <Form>
               <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>


            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrarme"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterScreen;