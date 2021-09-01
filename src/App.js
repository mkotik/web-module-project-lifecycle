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
        res.data.forEach((cur) => {
          const name = cur.name;
          const link = cur.html_url;
          this.setState({
            ...this.state,
            repos: [...this.state.repos, { name: name, link: link }],
          });
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios
        .get(`https://api.github.com/users/${this.state.user}`)
        .then((res) => {
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
          res.data.forEach((cur) => {
            const name = cur.name;
            const link = cur.html_url;
            this.setState({
              ...this.state,
              repos: [...this.state.repos, { name: name, link: link }],
            });
          });
        })
        .catch((err) => console.log(err));
    }
  }

  onSubmit = () => {
    this.setState({
      ...this.state,
      user: this.state.searchInput,
      repos: [],
      searchInput: "",
    });
    console.log(this.state);
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      searchInput: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Header onSubmit={this.onSubmit} onChange={this.onChange} />
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
