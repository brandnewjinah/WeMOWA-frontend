import React, { Component } from "react";
import { DropdownCat } from "../../components/Dropdown/Dropdown";

class SizesDD extends Component {
  state = {
    sizes: [],
    defaultSize: {},
  };

  componentDidMount() {
    fetch("/data/pd_sizes.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ sizes: res.sizes, defaultSize: res.sizes[0] })
      );
  }

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectedItem = (t) => {
    //console.log(t);
    this.setState({ defaultSize: t, listOpen: false });
  };

  render() {
    return (
      <div>
        <DropdownCat
          category="Size"
          list={this.state.sizes}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          handleSelection={this.selectedItem}
          defaultSize={this.state.defaultSize}
        />
      </div>
    );
  }
}

export default SizesDD;
