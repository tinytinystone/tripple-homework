import React, { Component } from "react";
import MetricsItem from "./MetricsItem";
import classNames from "classnames";
import "./Metrics.css";

export default class Metrics extends Component {
  render() {
    const metricsClass = classNames("metrics", "fadeBefore", {
      fadeEnter: this.props.on
    });
    return (
      <div className={metricsClass}>
        <MetricsItem
          num={this.props.on && 360}
          unit={"명"}
          category={"사용자"}
          on={this.props.on}
        />
        <MetricsItem
          num={this.props.on && 35}
          unit={"개"}
          category={"리뷰"}
          on={this.props.on}
        />
        <MetricsItem
          num={this.props.on && 1100}
          unit={"개"}
          category={"저장"}
          on={this.props.on}
        />
      </div>
    );
  }
}
