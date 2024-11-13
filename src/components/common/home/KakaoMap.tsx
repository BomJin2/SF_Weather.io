import { Card } from "@/components";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  useKakaoLoader();
  return (
    <>
      <Card className="w-1/4 min-w-[25%] h-full">
        {/* 지도를 표시할 컨테이너 */}
        <Map
          id="map"
          center={{ lat: 37.5683, lng: 126.9778 }}
          style={{ /**지도의 크기 */ width: "100%", height: "100%" }}
          level={13} /**지도의 확대 레벨 */
        />
      </Card>
    </>
  );
};
export { KakaoMap };
