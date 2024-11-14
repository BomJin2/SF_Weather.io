import { Card, CardHeader, CardTitle, CardDescription, CardContent, HourlyInfo } from "@/components";

const Hourly = () => {
  return (
    <>
      <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
        <CardHeader>
          <CardTitle className="text-xl">Hourly</CardTitle>
          <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent className="w-full flex gap-4 items-center overflow-x-scroll ">
          <HourlyInfo time={"오후 1시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={17} />
          <HourlyInfo time={"오후 2시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={20} />
          <HourlyInfo time={"오후 3시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={22} />
          <HourlyInfo time={"오후 4시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={22} />
          <HourlyInfo time={"오후 5시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={20} />
          <HourlyInfo time={"오후 6시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={18} />
          <HourlyInfo time={"오후 7시"} imgUrl={"src/assets/icons/1030n.svg"} temperature={16} />
        </CardContent>
      </Card>
    </>
  );
};
export { Hourly };
