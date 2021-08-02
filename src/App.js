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
      searchInput: "",
      user: "mkotik",
      name: "",
      img: "",
      bio: "",
      repos: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
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

    axios
      .get(`https://api.github.com/users/${this.state.user}/repos`)
      .then((res) => {
        console.log(res.data);
        res.data.forEach((cur) => {
          const name = cur.name;
          const link = cur.html_url;
          this.setState({
            ...this.state,
            repos: [...this.state.repos, { name: name, link: link }],
          });
        });
        console.log(this.state);
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
          repos={this.state.repos}
        />
      </div>
    );
  }
}

export default App;
