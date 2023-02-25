import React from "react";
import { fetchUserData, cancelFetch } from "./Pets-array";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  loadUserData() {
    console.log("loadUserData()");
    this.setState({
      userData: null,
    });
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
  }

  render() {
    const isLoading = this.state.userData === null;

    let className = "Profile";
    let name, img, breed, age;
    if (isLoading) {
      className += " loading";
      name = "Loading...";
      img = "loading image";
      breed = "Loading breed...";
      age = "Rendering age";
    } else {
      name = this.state.userData.name;
      img = this.state.userData.img;
      breed = this.state.userData.breed;
      age = this.state.userData.age;
    }

    return (
      <div className={className}>
        <div className="profile-pic">
          <img src={!isLoading && this.state.userData.img} alt=""></img>
        </div>
        <div className="profile-body">
          <h2>My name is: {name}</h2>
          <h3>I am a {breed}!</h3>
          <h3>I am {age} old!</h3>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
}
