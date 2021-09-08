import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const formSchema = yup.object().shape({
  username: yup.string().min(4).required("Please enter your username :)"),
  password: yup
    .string()
    .min(8)
    .required(
      "Please add an overly complicated password, that you will most assuredly forget in the next 5 seconds."
    ),
});

function Login(props) {
  // managing state for the form inputs

  const { tokenAquired } = props;

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.username)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.username]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.username]: err.errors[0],
        });
      });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://messaging-test.bixly.com/api-token-auth/", formState)
      .then((res) => {
        setUsers(users.concat(res.data));
        tokenAquired(res.data.token);
        console.log("success", users);

        setFormState({
          username: "",
          password: "",
        });
      })
      .catch(function (error) {

      })
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={formSubmit}>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            name="username"
            value={formState.username}
            onChange={inputChange}
          />
          {errors.username.length > 0 ? (
            <p className="error">{errors.username}</p>
          ) : null}
        </label>

        <label HTMLfor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </label>

        <pre>{JSON.stringify(users, null, 2)}</pre>
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </Wrapper>
  );
}
export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  max-width: 100%;

  .form {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 50%;
    color: #38703a;
    background-color: #ccdece;
    margin: 10px;
    padding: 20px;
    border: 3px solid #9da8a8;
  }
`;
