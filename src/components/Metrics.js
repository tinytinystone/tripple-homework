import React, { Component } from "react";
import MetricsItem from "./MetricsItem";
import classNames from "classnames";
import "./Metrics.css";

export default class Metrics extends Component {
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
    const metricsClass = classNames("metrics", "fadeBefore", {
      fadeEnter: this.state.mountOnEnter
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
