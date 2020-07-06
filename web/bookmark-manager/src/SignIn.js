import React, { Component } from "react";
import { signIn } from "./users";
import { setUser, setAuthToken } from "./session";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signIn = async () => {
    try {
      const { user, authToken } = await signIn(
        this.state.email,
        this.state.password
      );

      setUser(user);
      setAuthToken(authToken);
      this.props.history.push("/categories");
    } catch (error) {
      alert("Incorrect credentials!");
    }
  };

  render() {
    return (
      <div className="userContainer">
        <h1>Sign In</h1>

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

        <button
          className="userButton"
          onClick={this.signIn}
          onKeyPress={this.onInputKeyPress}
        >
          Sign In
        </button>

        <a className="createAccount" href="http://localhost:3000/SignUp">
          Create account
        </a>
      </div>
    );
  }
}

export default SignIn;
