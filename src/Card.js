import React from "react";

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
                <h5 className="card-title">{this.props.name}</h5>
                <p>{this.props.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
