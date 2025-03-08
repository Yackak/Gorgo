import styled from "styled-components";
import * as token from "../../../../../designToken.js";

// 배경 (모달 바깥 영역)
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 창
export const ModalPopup = styled.div`
  width: 600px;
  background: white;
  border-radius: 12px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

// 드래그 앤 드롭 영역
export const DropZone = styled.div`
  width: 100%;
  height: 250px;
  border: 2px dashed ${token.colors.main};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color:${token.colors.white};
  transition: 0.3s;

  &.drag-active {
    background-color: #e6f0ff;
    border-color: #002699;
  }
`;

// 업로드 아이콘
export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0px;
`;

// 텍스트 스타일
export const ModalText = styled.p`
  font-size: 16px;
  color:${token.colors.black};
  margin-top: 0px;
  text-align: center;
  line-height: 1.5;
`;

// 파일 업로드 버튼
export const FileUploadButton = styled.button`
  background:${token.colors.main};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background:${token.colors.sub};
  }
`;

// 키워드 리스트 컨테이너
export const KeywordList = styled.div`
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  margin-top: 20px;
  padding: 10px;
  background: ${token.colors.white};
  border-radius: 8px;
  border: 1px solid #ddd;
`;

// 개별 키워드 아이템
export const KeywordItem = styled.div`
  font-size: 14px;
  color: #333;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

// 버튼 컨테이너
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

// 완료 버튼 (파란색)
export const PrimaryButton = styled.button`
  width: 48%;
  background:${token.colors.main};
  color: ${token.colors.white};
  border: none;
  padding: 12px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${token.colors.sub};
  }
`;

// 엑셀 양식 다운로드 버튼 (회색)
export const SecondaryButton = styled(PrimaryButton)`
  background:${token.colors.gray_300};
  color:${token.colors.black};

  &:hover {
    background:${token.colors.gray};
  }
`;
