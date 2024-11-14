import { Card, CardHeader, CardTitle, CardDescription, CardContent, HourlyInfo } from "@/components";
import { ForecastDay, HourlyData } from "@/types";

interface Props {
  data: ForecastDay;
}

const Hourly = ({ data }: Props) => {
  if (!data || !data.hour) {
    return <div>데이터를 불러오는 중</div>;
  }

  return (
    <>
      <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
        <CardHeader>
          <CardTitle className="text-xl">Hourly</CardTitle>
          <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent className="w-full flex gap-4 items-center overflow-x-scroll ">
          {data.hour.map((item: HourlyData) => {
            return <HourlyInfo data={item} />;
          })}
        </CardContent>
      </Card>
    </>
  );
};
export { Hourly };
