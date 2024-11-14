import { useMemo } from "react";

const useFormmatedTime = (time: string) => {
  return useMemo(() => {
    const [data, hourString] = time.split(" ");
    const [hour, minute] = hourString.split(":").map(Number);

    let formatteTime;

    if (hour === 0) {
      formatteTime = "오전 0시";
    } else if (hour === 12) {
      formatteTime = "낮 12시";
    } else {
      const isAM = hour < 12;
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12시간 형식으로 변환
      const period = isAM ? "오전" : "오후 ";

      formatteTime = `${period} ${formattedHour}시`;
    }
    return formatteTime;
  }, [time]);
};
export default useFormmatedTime;
