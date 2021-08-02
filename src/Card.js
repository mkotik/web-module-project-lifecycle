import React from "react";
import Accordion from "./Accordion";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("rendered");
    return (
      <div className="m-2">
        <div className="bg-light card mb-3">
          <div className="row g-0 ">
            <div className="col-md-4">
              <img className="img-fluid" src={this.props.img} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-md-start">{this.props.name}</h5>
                <p className="mt-4 text-md-start">{this.props.bio}</p>
              </div>
            </div>
          </div>
          <Accordion repos={this.props.repos} />
        </div>
      </div>
    );
  }
}

export default Card;
