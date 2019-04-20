import React, { Component } from "react";
import classNames from "classnames";
import "./Awards.css";

export default class Awards extends Component {
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
    const awardsClass = classNames("awards", "fadeBefore", {
      fadeEnter: this.state.mountOnEnter
    });
    return (
      <div className={awardsClass}>
        <div className="awards__item item__google">
          <span className="awards__item__text">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </span>
        </div>
        <div className="awards__item item__apple">
          <span className="awards__item__text">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </span>
        </div>
      </div>
    );
  }
}
