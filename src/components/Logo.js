import React from "react";
import classNames from "classnames";
import logo from "./resources/triple@2x.png";
import "./Logo.css";

export default ({ on }) => {
  const logoClass = classNames("logo", "fadeBefore", {
    fadeEnter: on
  });
  return (
    <div src={logo} className={logoClass}>
      <img src={logo} alt="" className="logo__image" />
      <span className="logo__text">2019년 4월 기준</span>
    </div>
  );
};
