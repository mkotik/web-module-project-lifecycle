import React from "react";
import "./App.css";
import Header from "./Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card.js";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: "",
      bio: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/mkotik")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          name: res.data.name,
          img: res.data.avatar_url,
          bio: res.data.bio,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Card
          name={this.state.name}
          img={this.state.img}
          bio={this.state.bio}
        />
      </div>
    );
  }
}

export default App;
