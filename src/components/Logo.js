import React, { Component } from "react";
import classNames from "classnames";
import "./Logo.css";

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountOnEnter: false
    };
  }
  componentDidMount() {
    // FIXME: 배경이미지 로드된 이후에 setState될 수 있도록 처리 필요
    setTimeout(() =>
      this.setState({
        mountOnEnter: true
      })
    );
  }
  render() {
    const logoClass = classNames("logo", "fadeBefore", {
      fadeEnter: this.state.mountOnEnter
    });
    return (
      <div className={logoClass}>
        <span className="logo__text">2019년 4월 기준</span>
      </div>
    );
  }
}
