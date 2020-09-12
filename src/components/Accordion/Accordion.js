import React, { Component } from "react";
import "./Accordion.scss";

export class AccordionSpec extends Component {
  state = {
    showInfo: false,
  };

  handleToggle = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    //console.log("props", this.props);
    return (
      <div className="Accordion">
        <div className="accorTab" onClick={this.handleToggle}>
          <p>{this.props.list.title}</p>
        </div>
        <div
          className={this.state.showInfo ? "showContent content" : "content"}
        >
          <ul>
            <li>{this.props.list.specs}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export class AccordionKey extends Component {
  state = {
    title: this.props.title,
    text: this.props.text,
    showInfo: false,
  };

  handleToggle = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    //console.log("props", this.props);
    return (
      <div className="Accordion">
        <div className="accorTab" onClick={this.handleToggle}>
          <p>{this.state.title}</p>
          <i className="fas fa-plus"></i>
        </div>
        <div
          className={this.state.showInfo ? "showContent content" : "content"}
        >
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}
