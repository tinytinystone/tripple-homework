import React, { Component } from "react";
import classNames from "classnames";
import logo from "./resources/triple@2x.png";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    const logoClass = classNames("logo", "fadeBefore", {
      fadeEnter: this.props.on
    });
    return (
      <div src={logo} className={logoClass}>
        <img src={logo} alt="" className="logo__image" />
        <span className="logo__text">2019년 4월 기준</span>
      </div>
    );
  }
}
