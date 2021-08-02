import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className="bg-dark text-light p-3">
        <h1 className="">Github Card</h1>
      </header>
    );
  }
}

export default Header;
