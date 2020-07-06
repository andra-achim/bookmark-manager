import React, { Component } from "react";
import { signUp } from "./users";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signUp = async () => {
    await signUp(this.state.name, this.state.email, this.state.password);
    this.props.history.push("/signIn");
  };

  render() {
    return (
      <div className="userContainer">
        <h1>Sign Up</h1>
        <input
          className="input"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          className="input"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button className="userButton" onClick={this.signUp}>
          Sign Up
        </button>

        <a className="haveAccount" href="http://localhost:3000/SignIn">
          Already have an account?
        </a>
      </div>
    );
  }
}

export default SignUp;
