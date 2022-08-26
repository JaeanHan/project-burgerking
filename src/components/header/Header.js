import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderWrap from "./HeaderWrap";
import NavBar from "./NavBar";
import NavBarWrap from "./NavBarWrap";

const menu = [
  "스페셜&할인팩",
  "신제품(NEW)",
  "프리미엄",
  "와퍼&주니어",
  "치킨&슈림프버거",
  "올데이킹",
  "사이드",
  "음료&디저트",
];

const restautant = ["매장찾기"];

const event = ["이벤트"];

const brandStory = ["BRAND", "WHOPPER", "COMM."];

function Header() {
  const [isHoveringState, setIsHoveringState] = useState(false);

  const onMouseOverHandler = () => {
    setIsHoveringState(true);
    // console.log(1);
  };
  const onMouseOutHandler = () => {
    setIsHoveringState(false);
    // console.log(0);
  };
  return (
    <HeaderWrap isHovering={isHoveringState}>
      <div
        className={style["header-wrap"]}
        onMouseEnter={onMouseOverHandler}
        onMouseLeave={onMouseOutHandler}
      >
        <HeaderLogo />
        <NavBarWrap>
          <NavBar
            content={menu}
            title="메뉴소개"
            isHovering={isHoveringState}
          />
          <NavBar
            content={restautant}
            title="매장소개"
            isHovering={isHoveringState}
          />
          <NavBar content={event} title="이벤트" isHovering={isHoveringState} />
          <NavBar
            content={brandStory}
            title="브랜드스토리"
            isHovering={isHoveringState}
          />
        </NavBarWrap>
        <button type="button" className={style.btn_order}>
          <strong>딜리버리 주문</strong>
        </button>
      </div>
    </HeaderWrap>
  );
}

export default Header;
