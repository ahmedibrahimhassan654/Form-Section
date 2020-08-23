//imrc
import React, { Component } from "react";

import Input from "./common/input";
import joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };

  validate = () => {
    const result = joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "username is required";
    if (account.password.trim() === "")
      errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = (input) => {
    if (input.name === "username") {
      if (input.value.trim() === "") return "username is required";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "password is required";
    }
  };

  handleSubmet = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log(errors);
    //call the server
    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmet}>
          <Input
            name="username"
            label="Email Address"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            label="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
