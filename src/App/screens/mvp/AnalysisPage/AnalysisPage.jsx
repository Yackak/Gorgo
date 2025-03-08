import { useState, useEffect, useRef } from "react";
import * as S from "./styles/style.js";
import * as G from "../../style.js";
import Modal from "./components/modal.jsx";
// import Map from "./components/map.jsx";
// import AnalyzeBtn from "./components/analysis.btn.jsx";
import { getScanBtn } from "./apis/get.ScanBtn.js";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

function AnalysisPage() {
  const [selectedClinics, setSelectedClinics] = useState([]);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [sucharea, setSucharea] = useState("서울");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [List, setList] = useState([]); // 초기 상태를 빈 배열로 설정
  const navigate = useNavigate();
  const [sortCriterion, setSortCriterion] = useState("리뷰순");
  const [isSortModalOpen, setSortModalOpen] = useState(false);
  const [xPosition, setXPosition] = useState(0.0);
  const refBox = useRef(null);

  const [sortOption, setSortOption] = useState([]);
  const [sourcingProducts, setsourcingProducts] = useState([]);



  const handleSortChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    if (refBox.current) {
      const rect = refBox.current.getBoundingClientRect();
      setXPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isSortModalOpen]); // isSortModalOpen이 변경될 때마다 위치를 갱신
  const handleOptionClick = (value) => {
    setSortCriterion(value);
    setSortModalOpen(!isSortModalOpen);
    // setSelectedClinics([]);
  };
  const handleClick = (hospitalId) => {
    navigate("/Check", { state: { hospitalId } }); // 현재 페이지를 reviewUrl로 리디렉션
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getScanBtn(sucharea, sortCriterion);

        if (response.data.isSuccess) {
          setList(response.data.result);
        } else {
          console.error("Failed to fetch clinic:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch clinic:", error);
      }
    };

    fetchData();
  }, [sortCriterion, sucharea]);

  const openMapModal = () => {
    setIsMapModalOpen(true);
    setSelectedClinics([]);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  const updateSucharea = (newArea) => {
    setSucharea(newArea);
    closeMapModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false); // 모든 단계가 완료되면 모달을 닫음
  };



  const getSortedData = () => {
    let sortedData = [...List];

    return sortedData;
  };

  const handleClinicSelect = (clinic) => {
    if (selectedClinics.includes(clinic)) {
      setSelectedClinics(selectedClinics.filter((item) => item !== clinic));
    } else if (selectedClinics.length < 5) {
      setSelectedClinics([...selectedClinics, clinic]);
    }
  };

  const sortedData = getSortedData();

  const sourcingProductsList = (
    <S.RowDiv>
      {sortedData.map((clinic, index) => (
        <S.MainBtn key={clinic.hospitalId}>
          <S.MainBtnImg
            src={`/images/hospital_${clinic.hospitalId}.jpg`} // 절대 경로로 이미지 지정
            onError={(e) => (e.target.src = "/images/defaultImage.jpg")} // 이미지 로드 실패 시 대체 이미지 설정
          />
          <S.MainBtnText onClick={() => handleClick(clinic.hospitalId)}>
            <S.ListTop>
              <S.StyledDiv>
                <div className="text-ellipsis">{clinic.hospitalName}</div>
              </S.StyledDiv>
              <S.ScoreDiv>
                <img
                  src="/Star.svg"
                  alt="Star Icon"
                  style={{ marginLeft: "12px", marginRight: "6px", height: "20px" }}
                />
                {clinic.scoreAvg}
              </S.ScoreDiv>
            </S.ListTop>
            <S.ListAddress>
              <div className="text-ellipsis">{clinic.location}</div>
            </S.ListAddress>
            <S.ListBotton>
              <S.blogReviewBox>
                <S.review>방문자 리뷰 {clinic.reviewCnt}</S.review>
                <S.blog>블로그 리뷰 {clinic.blogCnt}</S.blog>
              </S.blogReviewBox>
            </S.ListBotton>
          </S.MainBtnText>

          <S.InputBox onClick={() => handleClinicSelect()}>
            <S.MainBtnInput
              type="checkbox"
              checked={selectedClinics.includes(clinic)}
              onChange={() => handleClinicSelect(clinic)}
            />
          </S.InputBox>
        </S.MainBtn>
      ))}
    </S.RowDiv>
  );

  const mobileVersion = "모바일은 아직 준비중이에요!"
  // sortedData.map((clinic) => (
  //   <S.mobileMainBtn key={clinic.hospitalId}>
  //     <S.MainBtnImg
  //       src={`/images/hospital_${clinic.hospitalId}.jpg`} // 절대 경로로 이미지 지정
  //       onError={(e) => (e.target.src = "/images/defaultImage.jpg")} // 이미지 로드 실패 시 대체 이미지 설정
  //     />{" "}
  //     <S.mMainBtnText onClick={() => handleClick(clinic.hospitalId)}>
  //       <S.mListTop>
  //         <S.mStyledDiv>
  //           <div className="text-ellipsis">{clinic.hospitalName}</div>
  //         </S.mStyledDiv>
  //         <S.ScoreDiv>
  //           <img src="/Star.svg" alt="Star Icon" style={{ marginRight: "3px", height: "15px" }} />
  //           {clinic.scoreAvg.toFixed(1)}
  //         </S.ScoreDiv>
  //       </S.mListTop>
  //       <S.mListAddress>
  //         <div className="text-ellipsis">{clinic.location}</div>
  //       </S.mListAddress>
  //       <S.ListBotton>
  //         <S.mblogReviewBox>방문자 리뷰 {clinic.reviewCnt}</S.mblogReviewBox>
  //       </S.ListBotton>
  //     </S.mMainBtnText>
  //     <S.InputBox>
  //       <S.MainBtnInput
  //         type="checkbox"
  //         checked={selectedClinics.includes(clinic)}
  //         onChange={() => handleClinicSelect(clinic)}
  //       />
  //     </S.InputBox>
  //   </S.mobileMainBtn>
  // ));

  const EmptyErrorPage = <S.EmptyError>
    분석하기 버튼으로 키워드를 추가해주세요 !
  </S.EmptyError>

  return (
    <G.Main>
      <G.Nav>
        {/* <img src="/Nav_logo.png" alt="로고" onClick={handleLogoClick} />
        <span>안경을 벗다 안과를 안다!</span> */}
      </G.Nav>

      <S.SelectBar>
        <S.rowdiv>

          <div onClick={() => setSortModalOpen(!isSortModalOpen)}>
            <S.SortSelect ref={refBox}>
              {sortCriterion}
              <img
                src="/fi-rr-angle-small-down.svg"
                alt="Open/Close"
                style={{ width: "14px", height: "14px", marginLeft: "3px" }}
              />
            </S.SortSelect>
            <S.sortModal isVisible={isSortModalOpen} xPosition={xPosition}>
            <S.sortOption onClick={() => handleOptionClick("리뷰순")} is_selected={sortCriterion === "리뷰순"}>
              리뷰순
              </S.sortOption>
              <S.sortOption onClick={() => handleOptionClick("별점순")} is_selected={sortCriterion === "별점순"}>
              별점순
              </S.sortOption>
              <S.sortOption onClick={() => handleOptionClick("가격순")} is_selected={sortCriterion === "가격순"}>
                가격순
              </S.sortOption>
              <S.sortOption onClick={() => handleOptionClick("판매자로켓비율순")} is_selected={sortCriterion === "판매자로켓비율순"}>
                판매자 로켓 비율순
              </S.sortOption>
              <S.sortOption onClick={() => handleOptionClick("로켓배송비율순")} is_selected={sortCriterion === "로켓배송비율순"}>
                로켓 배송 비율순
              </S.sortOption>
            </S.sortModal>
          </div>
          <S.graphBtn
          selected={sortOption === "seller"}
          onClick={() => {sortOption=="seller"?handleSortChange(""):handleSortChange("seller")}}
        >
          판매자 로켓 50% 이상
        </S.graphBtn>
        <S.graphBtn
          selected={sortOption === "rocket"}
          onClick={() => {sortOption=="rocket"?handleSortChange(""):handleSortChange("rocket")}}
        >
          로켓 배송 50% 이상
        </S.graphBtn>
        </S.rowdiv>
        <div>
          <div onClick={openModal}>
          </div>
          <Modal
            isOpen={isModalOpen}
            content={`${isModalOpen}`}
            closeModal={closeModal} // "다음" 버튼 클릭 시 호출
            closeImmediately={closeModal} // Background 클릭 시 호출
          />
        </div>
      </S.SelectBar>
      {isMobile
      ? mobileVersion 
      : sourcingProducts.length==0
      ? EmptyErrorPage
      : sourcingProductsList}

      <div style={{ height: "120.07px" }}></div>
      {/* <AnalyzeBtn selectedClinics={selectedClinics} disable={selectedClinics.length <= 1} /> */}
      <S.ScrollButton onClick={openModal} disabled={isModalOpen}>분석하기</S.ScrollButton>

      {/* {isMapModalOpen && (
        <Map
          initialArea={sucharea}
          updateSucharea={updateSucharea}
          closeMapModal={closeMapModal}
          sortedData={sortedData}
        />
      )} */}
    </G.Main>
  );
}

export default AnalysisPage;
