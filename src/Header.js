import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
    };
  }

  render() {
    return (
      <header className="bg-dark text-light p-3">
        <h1 className="">Github Card</h1>
        <div className="d-flex justify-content-center align-items-center">
          <input onChange={this.props.onChange} />
          <button
            className="btn btn-primary btn-sm mx-2"
            onClick={this.props.onSubmit}
          >
            Submit
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
