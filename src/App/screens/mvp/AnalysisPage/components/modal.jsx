import * as S from "../styles/modal.style.js";
import * as token from "../../../../../designToken.js";
import React, { useState } from "react";
import * as XLSX from "xlsx";

function Modal({ isOpen, closeModal, closeImmediately }) {
  const [dragActive, setDragActive] = useState(false);
  const [keywords, setKeywords] = useState([]);
  
  // 파일 드래그 앤 드롭 핸들러
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files.length > 0) {
      const selectedFile = e.dataTransfer.files[0];
      handleFileUpload(selectedFile);
    }
  };

  // 파일 업로드 및 키워드 추출
  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0]; // 첫 번째 시트 선택
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // "키워드" 열에서 데이터 추출
      const extractedKeywords = jsonData.map(row => row["키워드"]).filter(Boolean);
      setKeywords(extractedKeywords);
      console.log(extractedKeywords)
    };

    reader.readAsArrayBuffer(file);
  };

  // 엑셀 양식 다운로드 기능
  const handleDownloadTemplate = () => {
    const worksheet = XLSX.utils.json_to_sheet([{ 키워드: "" }]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "양식");

    // 파일 저장
    XLSX.writeFile(workbook, "exel-templet.xlsx");
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <S.Background onClick={closeImmediately}>
        <S.ModalPopup onClick={(e) => e.stopPropagation()}>
          <S.DropZone
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={dragActive ? "drag-active" : ""}
          >
            <S.Icon src="/file-plus.svg" alt="파일 업로드 아이콘" />
            <S.ModalText>
              <span style={{ color: token.colors.red, fontWeight: "bold" }}>분석할 키워드</span>를 내 PC에서 업로드하거나
              <br />
              문서를 드래그하여 넣어주세요.
            </S.ModalText>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => handleFileUpload(e.target.files[0])}
              style={{ display: "none" }}
              id="fileUpload"
            />
            <S.FileUploadButton onClick={() => document.getElementById("fileUpload").click()}>
              파일 선택
            </S.FileUploadButton>
          </S.DropZone>

          {/* 키워드 리스트 출력 */}
          {keywords.length > 0 && (
            <S.KeywordList>
              {keywords.map((keyword, index) => (
                <S.KeywordItem key={index}>{keyword}</S.KeywordItem>
              ))}
            </S.KeywordList>
          )}

          <S.ButtonGroup>
            <S.PrimaryButton onClick={closeModal}>완료</S.PrimaryButton>
            <S.SecondaryButton onClick={handleDownloadTemplate}>엑셀 양식 다운로드</S.SecondaryButton>
          </S.ButtonGroup>
        </S.ModalPopup>
      </S.Background>
    </div>
  );
}

export default Modal;