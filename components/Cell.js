import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classNames = 'cell ';
        let styles;

        if (this.props.sizes) classNames += this.props.sizes;
        if (this.props.style) styles = this.props.style;

        return (
            <div className={classNames} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default Cell;