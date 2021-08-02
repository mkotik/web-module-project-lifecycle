import React from "react";
import "./App.css";

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="bg-light accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#repositories"
            >
              Repositories
            </button>
          </h2>
          <div id="repositories" class="accordion-collapse collapse">
            <div class="accordion-body">
              <ul>
                {this.props.repos.map((cur, i) => {
                  return (
                    <li>
                      <a
                        className="text-decoration-none anchor"
                        target="_blank"
                        href={cur.link}
                        key={i}
                        rel="noreferrer"
                      >
                        <h5 className="text-start fw-light lh-lg ">
                          {cur.name}
                        </h5>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
