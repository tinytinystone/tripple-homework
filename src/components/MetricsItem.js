import React, { Component } from "react";
import "./MetricsItem.css";

export default class MetricsItem extends Component {
  render() {
    const { num, unit, category } = this.props;
    return (
      <div className="metrics__item">
        <strong>
          {num} {unit}
        </strong>
        의 {category}
      </div>
    );
  }
}
