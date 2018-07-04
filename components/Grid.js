import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = this.props.y ? "grid-y" : "grid-x";

    if (this.props.paddingX) classNames += " grid-padding-x";
    if (this.props.paddingY) classNames += " grid-padding-y";
    if (this.props.marginX) classNames += " grid-margin-x";
    if (this.props.marginY) classNames += " grid-margin-y";

    return <div className={classNames}>{this.props.children}</div>;
  }
}

export default Grid;
