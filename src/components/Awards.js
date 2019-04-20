import React from "react";
import classNames from "classnames";
import playStore from "./resources/play-store@2x.png";
import appStore from "./resources/app-store@2x.png";
import "./Awards.css";

export default ({ on }) => {
  const awardsClass = classNames("awards", "fadeBefore", {
    fadeEnter: on
  });
  return (
    <div className={awardsClass}>
      <div className="awards__item">
        <img src={playStore} alt="" className="awards__item__image" />
        <span className="awards__item__text">
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </span>
      </div>
      <div className="awards__item">
        <img src={appStore} alt="" className="awards__item__image" />
        <span className="awards__item__text">
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </span>
      </div>
    </div>
  );
};
