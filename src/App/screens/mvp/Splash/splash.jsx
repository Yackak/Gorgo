import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../AnalysisPage/styles/style.js";
import * as G from "../style.js";
import ShakingCharacter from "./components/analysisMoveCharacter.jsx";
import Graph from "../AnalysisPage/components/graph.jsx";

const Analyze = () => {
  const location = useLocation();
  const { selectedClinics } = location.state || {};
  const [selectedID, setSelectedID] = useState([]);



  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };

  // 도움말 버튼
  const [isNotificationClickedRanking, setIsNotificationClickedRanking] = useState(false);
  const handleNotificationClickRanking = () => {
    setIsNotificationClickedRanking(!isNotificationClickedRanking);
  };

  // 도움말 버튼
  const [isNotificationClickedAnalysis, setIsNotificationClickedAnalysis] = useState(false);
  const handleNotificationClickAnalysis = () => {
    setIsNotificationClickedAnalysis(!isNotificationClickedAnalysis);
  };




  useEffect(() => {
    const fetchId = async () => {
      try {
        const selecteId = selectedClinics.map((clinic) => clinic.hospitalId);
        setSelectedID(selecteId);
      } catch (error) {
        console.error("클리닉 ID를 가져오는 데 실패했습니다:", error);
      }
    };

    if (selectedClinics) {
      fetchId();
    }
  }, [selectedClinics]);

  return (
    <G.Main>
      <G.Nav>
        <img src="/Nav_logo.png" alt="로고" onClick={handleLogoClick} />
        <span>안과 확인하기</span>
      </G.Nav>
      <S.ContentBox>
        <S.title>
          한눈에 분석하기
          <S.ModalText>
            안다가 비교해봤어요!
            <S.NotificationBtn onClick={handleNotificationClickAnalysis}>
              <img src="/notification.png" style={{ width: "16px", height: "auto" }} alt="" />
              <S.NotificationTxt isClicked={isNotificationClickedAnalysis}>
                안과 이이콘을 클릭하면{"\n"}
                <S.fontBold>안과 상세 페이지</S.fontBold>로 이동해요!
              </S.NotificationTxt>
            </S.NotificationBtn>
          </S.ModalText>
        </S.title>
        <ShakingCharacter characterText="안과 아이콘을 누르면 이동해요!" selectedID={selectedID} />
        <hr style={{ width: "100%", border: "1px solid #F2F2F2", marginTop: "32px", marginBottom: "25px" }} />
        <S.title>
          그래프로 비교하기
          <S.ModalText>
            원하시는 기준으로 비교해보세요.
            <S.NotificationBtn onClick={handleNotificationClickRanking}>
              <img src="/notification.png" style={{ width: "16px", height: "auto" }} alt="" />
              <S.NotificationTxt isClicked={isNotificationClickedRanking}>
                네이버 <S.fontBold>블로그</S.fontBold>와 <S.fontBold>리뷰</S.fontBold>로{"\n"}
                안과를 비교해주고 있어요!
              </S.NotificationTxt>
            </S.NotificationBtn>
          </S.ModalText>
        </S.title>
        <Graph selectedClinics={selectedClinics} />
      </S.ContentBox>
    </G.Main>
  );
};

export default Analyze;
