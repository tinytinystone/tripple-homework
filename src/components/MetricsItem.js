import React, { Component } from "react";
import CountUp from "react-countup";
import "./MetricsItem.css";

export default class MetricsItem extends Component {
  render() {
    const { num, unit, category } = this.props;
    return (
      <div className="metrics__item">
        <strong>
          <CountUp start={1} end={num} separator="," />만 {unit}
        </strong>
        의 {category}
      </div>
    );
  }
}
