import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
    };
  }

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
      <header className="bg-dark text-light p-3">
        <h1 className="">Github Card</h1>
        <div className="d-flex justify-content-center align-items-center">
          <input onChange={this.onChange} />
          <button
            className="btn btn-primary btn-sm mx-2"
            onClick={this.props.onClick}
          >
            Submit
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
