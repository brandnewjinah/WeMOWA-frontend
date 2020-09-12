import React, { Component } from "react";
import { AccordionSpec } from "./Accordion";

class AccordionP extends Component {
  state = {
    accordion: [
      {
        id: 0,
        title: "Specifications",
        specs: "Weight: 6.8 KG",
      },
      {
        id: 1,
        title: "Materials",
        specs: "Weight: 6.8 KG",
      },
    ],
  };
  render() {
    return (
      <div className="AccordionP">
        {this.state.accordion.map((m) => {
          return <AccordionSpec key={m.id} list={m} />;
        })}
      </div>
    );
  }
}

export default AccordionP;
