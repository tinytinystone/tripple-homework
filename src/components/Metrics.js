import React from "react";
import MetricsItem from "./MetricsItem";
import classNames from "classnames";
import "./Metrics.css";

export default ({ on }) => {
  const metricsClass = classNames("metrics", "fadeBefore", {
    fadeEnter: on
  });
  return (
    <div className={metricsClass}>
      <MetricsItem num={on ? 360 : 1} unit={"명"} category={"사용자"} />
      <MetricsItem num={on ? 35 : 1} unit={"개"} category={"리뷰"} />
      <MetricsItem num={on ? 1100 : 1} unit={"개"} category={"저장"} />
    </div>
  );
};
