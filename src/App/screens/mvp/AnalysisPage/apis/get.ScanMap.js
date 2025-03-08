import axios from "axios";
export const getScanMap = async (sucharea) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/search/location/hospital?location=${sucharea}` //seoul이거 나중에 ${sucharea}로 바꿔야함
    );
    return response; // 필요한 데이터를 반환
  } catch (e) {
    console.error(e);
    return null; // 에러 발생 시 null 반환
  }
};
