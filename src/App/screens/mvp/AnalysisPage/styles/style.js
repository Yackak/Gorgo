import styled, { css } from "styled-components";
import * as token from "../../../../../designToken.js";
import { isMobile, isDesktop } from "react-device-detect";

export const Main = styled.main`
  position: relative; // 부모를 상대 위치로 설정
  width: ${isDesktop ? "1280px" : "100%"};
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${isMobile ? "320px" : "auto"}; // 모바일일 때 최소 너비 설정
`;

export const NavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 8vh;
  width: 100%;
  justify-content: center;
  ${token.typography.appointment_topbar_16};
  text-align: center;
  img {
    position: absolute;
    left: 5vw;
  }
`;

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed; /* 또는 absolute */
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 5;
`;

export const ModalPopup = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${isDesktop ? "304.64px" : "360px"};
  border-radius: 20px;
  z-index: 7;
`;
export const ModalBtn = styled.button`
  position: fixed; // absolute에서 fixed로 변경하여 항상 화면에 고정되게 함
  bottom: 0; // 버튼을 화면 하단에 위치시킴
  left: 50%; // 버튼을 화면 가로의 중앙에 위치시킴
  transform: translateX(-50%); // X축 기준 중앙 정렬을 위해 translateX 사용
  align-items: center;
  display: flex;
  width: 500px; // px 단위 추가
  justify-content: center;
  background-color: ${token.colors.green_300};
  ${token.typography.appointment_topbar_16}
  height: 60px;
  color: white;
  border: none;
  z-index: 6;
  border-radius: ${isDesktop ? "20px" : ""};
`;

export const ModalTextH = styled.div`
  margin-top: 27px;
  ${isMobile ? token.typography.ScanPage_E_16 : token.typography.appointment_main_20};

  line-height: 100%;
  white-space: pre-line;
  text-align: center;
  line-height: 24px;
`;

export const ModalText = styled.div`
  color: ${token.colors.grey_1500};
  margin-top: 8px;
  margin-bottom: 21px;
  ${token.typography.ScanPage_n_12};
  font-size: ${isDesktop ? "16px" : "12px"};
`;
export const SortSelect = styled.div`
  background-color: ${token.colors.main_100};
  ${token.typography.ScanPage_m_12}
  border-radius: 100px;
  color: ${token.colors.main};
  border: 1px solid ${token.colors.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 9px 8px 9px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const sortModal = styled.div`
  ${token.typography.ScanPage_m_12}
  position: absolute;
  width: 120px;
  top: calc(8vh + 15px);
  left: ${({ xPosition }) => `${xPosition}px`};
  border-radius: 10px;
  transform: translateX(8%);
  border: 1px solid ${token.colors.gray};
  background-color: ${token.colors.white};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  padding-bottom: 10px;
  z-index: 5;
`;
export const sortOption = styled.div`
  color: ${({ is_selected }) => (is_selected ? "#666666" : "#999999")};
  padding-left: ${isDesktop ? "12px" : "9px"};
  padding-top: ${isDesktop ? "15px" : "10px"};
  ${token.typography.ScanPage_m_12};
`;
export const MapModal = styled.div`
  position: absolute;
  width: ${isDesktop ? "50%" : "100%"};
  transform: translate(-50%, 0);
  height: 80vh;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  z-index: 5;
  bottom: 0;
  left: 50%;
`;
export const MapModalXBtn = styled.img`
  position: absolute;
  right: 4%;
  border: none;
  background-color: white;
`;


export const rowdiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const SelectBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 13px;
  margin-top: -26px;
`;

export const MapNavText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  justify-content: center;
  ${token.typography.appointment_topbar_16}
  text-align: center;
`;
export const MapInput = styled.input`
  border: none;
  display: flex;
  margin-left: 15px;
  width: 80%;
  ${token.typography.ScanPage_n_14}
  color: ${token.colors.grey_1000};
  background-color: ${token.colors.grey_100_};
`;
export const MapInputdiv = styled.div`
  border: none;
  background-color: ${token.colors.grey_100_};
  border-radius: 100px;
  width: 90%;
  height: 6%;
  display: flex;
  align-items: center;
`;
export const MainImgTextDiv = styled.div`
  width: 81%;
  background-color: beige;
  display: flex;
  align-items: center;
`;

export const MainBtnImg = styled.img`
  height: ${isMobile ? "91.22px" : "130px"};
  width: ${isMobile ? "91.22px" : "130px"};
  border-radius: 15px;
  margin: ${isMobile ? "2.5%" : "9.42px"};
`;
export const RowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
`;
export const MainBtn = styled.div`
  margin-top: 12px;
  width: 100%; // Default width for mobile
  border: 2px solid;
  border-radius: 10px;
  border-width: 0;
  align-items: center;
  display: flex;
  text-align: start;
  background-color: white;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 49%; // Adjust width for PC to show two buttons per row
    margin-right: 2%; // Add right margin except last item in a row
  }

  &:nth-child(even) {
    margin-right: 0; // Remove margin for the second item in a row
  }
`;

export const mobileMainBtn = styled.div`
  margin-top: 12px;
  width: 90%;
  border: 2px solid;
  border-radius: 10px;
  border-width: 0;
  justify-content: space-around;
  align-items: center;
  display: flex;
  text-align: start;
  background-color: white;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);
`;
export const MainBtnText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 55%;
`;
export const mMainBtnText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 2%;
`;
export const ScoreDiv = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 18px;
  ${token.typography.ScanPage_n_14}
`;
export const mScoreDiv = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 16px;
  ${token.typography.ScanPage_n_14}
`;
export const StyledDiv = styled.div`
  align-items: center;
  color: black;
  line-height: 100%;
  ${token.typography.appointment_topbar_16}
  width: 70%;
  font-size: 24px;
  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;
export const mStyledDiv = styled.div`
  align-items: center;
  color: black;
  line-height: 100%;
  ${token.typography.appointment_topbar_16}
  width: 70%;
  font-size: 20px;

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
`;

export const MainBtnInput = styled.input`
  appearance: none;
  width: 22.9px;
  height: 22.9px;
  border: 1.5px solid ${token.colors.grey_500_};
  border-radius: 0.35rem;
  margin-right: 25px;

  &:checked {
    width: 22.9px;
    height: 22.9px;
    border-color: transparent;
    background-image: url("/checkbox.svg");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: white;
    border: 1.5px solid ${token.colors.green_300};
  }
`;

export const ListTop = styled.div`
  display: flex;
  color: ${token.colors.grey_1000};
  font-size: 12px;
  ${token.typography.ScanPage_n_14}
`;
export const mListTop = styled.div`
  display: flex;
  color: ${token.colors.grey_1000};
  font-size: 12px;
  ${token.typography.ScanPage_n_14}

  justify-content: space-between;
`;
export const ListAddress = styled.div`
  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  padding-top: 8px;
  padding-bottom: 10px;
  color: ${token.colors.grey_1500};
  line-height: 100%;
  font-size: 18px;
  ${token.typography.ScanPage_n_14}
`;
export const mListAddress = styled.div`
  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  padding-top: 8px;
  padding-bottom: 10px;
  color: ${token.colors.grey_1500};
  font-size: 14px;
  ${token.typography.ScanPage_n_14}
  line-height: 100%;
`;
export const ListBotton = styled.div`
  color: ${token.colors.grey_1000};
  width: 100%;
  line-height: 100%;
  font-size: 12px;
  ${token.typography.ScanPage_n_14}
  margin-top: 14px;
`;

export const blogReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  ${token.typography.ScanPage_n_14}
`;
export const mblogReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  ${token.typography.ScanPage_n_14}
`;
export const review = styled.div`
  width: ${isMobile ? "50%" : "auto"};
`;
export const blog = styled.div`
  margin-left: 10.5px;
  width: ${isMobile ? "50%" : "auto"};
`;
export const ScrollButton = styled.button`
  margin: auto;
  margin-bottom: 7.5%;
  bottom: 0;
  width: 280px;
  height: 45px;
  padding: auto;
  font-size: 17px;
  ${token.typography.ScanPage_n_14}
  background-color: ${token.colors.main};
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  z-index: 3;
`;
export const disableScrollButton = styled.button`
  margin: auto;
  margin-bottom: 7.5%;
  bottom: 0;
  width: 280px;
  height: 45px;
  padding: auto;
  font-size: 17px;
  ${token.typography.ScanPage_n_14}
  background-color: ${token.colors.grey_900_};
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  z-index: 3;
  cursor: not-allowed;
`;
export const MapUl = styled.ul`
  position: absolute;
  top: calc(16% - 6px);
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: white;
  border-radius: 0 0 20px 20px;
  max-height: 65%; // 5개 항목의 높이에 맞게 조절
  overflow-y: auto; // 세로 스크롤 가능하도록 설정
  list-style: none; // 리스트 스타일 제거
  padding: 0; // 패딩 제거
  scrollbar-width: none;
`;
export const MapLi = styled.li`
  list-style: none; // 리스트 스타일 제거
  margin-top: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid #f2f2f2;
  margin-left: 5%;
`;

export const graphBtn = styled.button`
  align-self: flex-start;
  background: none;
  padding: 8px;

  border: 1px solid ${(props) => (props.selected ? `${token.colors.sub}` : `${token.colors.gray}`)};
  background-color: ${(props) => (props.selected ? `${token.colors.main_100}` : `${token.colors.gray_100}`)};
  color: ${(props) => (props.selected ? `${token.colors.main}` : `${token.colors.black_300}`)};

  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Pretendard";
  letter-spacing: -0.5px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
`;
export const EmptyError = styled.div`
  position: relative; // 부모를 상대 위치로 설정
  width: ${isDesktop ? "1280px" : "100%"};
  color:${token.colors.black}
  height: fit-content;
  margin: 0 auto;
  margin-top:120px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${isMobile ? "320px" : "auto"}; // 모바일일 때 최소 너비 설정
`;
