import React from "react";
import CountUp from "react-countup";
import "./MetricsItem.css";

export default ({ num, unit, category }) => {
  return (
    <div className="metrics__item">
      <strong>
        <CountUp end={num} separator="," />만 {unit}
      </strong>
      의 {category}
    </div>
  );
};
