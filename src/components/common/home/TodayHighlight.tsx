import { Card, CardContent, CardDescription, CardHeader, CardTitle, HighlightsOption, SunRiseSet } from "@/components";
import { ForecastTideDay, Tide, Weather } from "@/types";

interface Props {
  currentData: Weather;
  tideData: ForecastTideDay;
}

const TodayHighlight = ({ tideData, currentData }: Props) => {
  if (!currentData || !tideData) {
    <div> 데이터를 불러오는 중입니다</div>;
  }

  const tideTimesWithUnits = tideData.day.tides[0].tide.map((item: Tide) => {
    const [_, hourString] = item.tide_time.split(" ");
    const [hour] = hourString.split(":").map(Number);
    const formmattedUnit = hour < 12 ? "am" : "pm";

    return {
      displayTime: item.tide_time.split(" ")[1],
      unit: formmattedUnit,
      type: item.tide_type,
    };
  });
  return (
    <>
      <Card className="flex-1 h-full">
        <CardHeader>
          <CardTitle className="text-xl">Today's Highlights</CardTitle>
          <CardDescription className="">오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.</CardDescription>
          <CardContent className="flex flex-col p-0 gap-5">
            <div className="flex gap-5">
              <Card className="w-full bg-neutral-100">
                <CardHeader>
                  <CardDescription className="font-semibold text-neutral-700">
                    해양 및 조수 데이터 <span className="text-neutral-400 font-normal ml-1">Marine and Sailing</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex items-center justify-between">
                  <img src="src/assets/icons/Waves.png" alt="" className="h-14" />
                  <div className="w-fit grid grid-cols-4 gap-3">
                    {tideTimesWithUnits.map((tide, index) => {
                      return (
                        <div className="flex flex-col items-center">
                          <p className="text-sm text-muted-foreground">{index + 1}회 - 만조</p>
                          <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                            {tide.displayTime}
                            <span className="ml-[1px]">{tide.unit}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full  bg-neutral-100">
                <CardHeader>
                  <CardDescription className="font-semibold text-neutral-700">
                    일출 / 일몰 <span className="text-neutral-400 font-normal ml-1">Sunrise and Sunset</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className=" grid grid-cols-2">
                  <SunRiseSet imgUrl={"src/assets/icons/1000d.svg"} label={"Sunrise"} time={tideData.astro.sunrise} />
                  <SunRiseSet imgUrl={"src/assets/icons/1000n.svg"} label={"Sunset"} time={tideData.astro.sunset} />
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <HighlightsOption
                title={"습도"}
                Description={"Humidity"}
                imgUrl={"src/assets/icons/Humidity.svg"}
                num={currentData.current.humidity}
                sign={"%"}
              />
              <HighlightsOption
                title={"기압"}
                Description={"Pressure"}
                imgUrl={"src/assets/icons/Wind.svg"}
                num={currentData.current.pressure_mb}
                sign={"hPa"}
              />
              <HighlightsOption
                title={"가시거리"}
                Description={"Visibility"}
                imgUrl={"src/assets/icons/Fog.svg"}
                num={currentData.current.vis_km}
                sign={"km"}
              />
              <HighlightsOption
                title={"체감온도"}
                Description={"Fells Like"}
                imgUrl={"src/assets/icons/Hot.svg"}
                num={currentData.current.feelslike_c}
              />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};
export { TodayHighlight };
