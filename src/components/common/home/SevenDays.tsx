import { Card, CardContent, CardDescription, CardHeader, CardTitle, WeekInfo } from "@/components";

const SevenDays = () => {
  return (
    <>
      <Card className="w-1/4 h-full">
        <CardHeader>
          <CardTitle>7 Days</CardTitle>
          <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <WeekInfo high={22} low={14} day={"03"} dayOfWeek={"일요일"} />
          <WeekInfo high={17} low={9} day={"04"} dayOfWeek={"월요일"} />
          <WeekInfo high={13} low={8} day={"05"} dayOfWeek={"화요일"} />
          <WeekInfo high={10} low={6} day={"06"} dayOfWeek={"수요일"} />
          <WeekInfo high={11} low={4} day={"07"} dayOfWeek={"목요일"} />
          <WeekInfo high={13} low={6} day={"08"} dayOfWeek={"금요일"} />
          <WeekInfo high={15} low={9} day={"09"} dayOfWeek={"토요일"} />
        </CardContent>
      </Card>
    </>
  );
};
export { SevenDays };
