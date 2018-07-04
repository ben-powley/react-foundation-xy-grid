import React, { Component } from "react";

class GridContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = "grid-container";

    if (this.props.full) classNames += " full";
    if (this.props.fullMedium) classNames += "full-medium";

    return <div className={classNames}>{this.props.children}</div>;
  }
}

export default GridContainer;
