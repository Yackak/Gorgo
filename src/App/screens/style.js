import styled, { css } from "styled-components";
import * as token from "../../designToken";
import { isMobile, isDesktop } from "react-device-detect";

export const Main = styled.main`
  ${isDesktop &&
  css`
    position: relative; // 부모를 상대 위치로 설정
    width: 1280px;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}

  ${isMobile &&
  css`
    position: relative; // 부모를 상대 위치로 설정
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 8vh;
  width: 100%;
  justify-content: center;
  /* ${token.typography.appointment_topbar_16}; */
  font-size: "Pretendard";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: center;

  img {
    position: absolute;
    /* left: 5vw; */
    left: 5%;
  }
`;
