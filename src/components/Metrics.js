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
        <MetricsItem num={"360만"} unit={"명"} category={"사용자"} />
        <MetricsItem num={"35만"} unit={"개"} category={"리뷰"} />
        <MetricsItem num={"1,100만"} unit={"개"} category={"저장"} />
      </div>
    );
  }
}
