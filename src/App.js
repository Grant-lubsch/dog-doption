import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./assets/logo.jpg";
import { Profile } from "./Profile";
import { Directory } from "./Directory";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick =
      this.handleReturnToDirectoryClick.bind(this);
  }

  handleChoose(newUsername) {
    this.setState({ currentUsername: newUsername });
  }

  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }

  render() {
    let body;
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={this.handleChoose} />;
    }

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="fur">Let's find you a new fur baby!</h3>
        </header>

        <main>{body}</main>
        <nav>
          {this.state.currentUsername && (
            <button
              color="blue"
              className="adopt-button"
              onClick={this.handleReturnToAdoptionPage}
            >
              Adopt Me!
            </button>
          )}
          {this.state.currentUsername && (
            <button
              className="return-button"
              onClick={this.handleReturnToDirectoryClick}
            >
              Return to List of Dogs
            </button>
          )}
        </nav>
      </div>
    );
  }
}

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
