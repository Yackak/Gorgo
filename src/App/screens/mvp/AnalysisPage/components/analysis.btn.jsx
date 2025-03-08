import React from "react";
import * as S from "../styles/style";
import { useNavigate } from "react-router-dom";

function AnalyzeBtn({ selectedClinics ,disable}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Analyze", { state: { selectedClinics } }); // 현재 페이지를 reviewUrl로 리디렉션
  };
  return (
    <>
      <S.ScrollButton onClick={handleClick} disabled={disable}>분석하기</S.ScrollButton>
    </>
  );
}
export default AnalyzeBtn;
