interface WeatherInfo {
  maxTemp: number;
  minTemp: number;
  date: string;
  iconCode: string;
  isDay: boolean;
}

interface Props {
  data: WeatherInfo;
}

function formatDate(epoch: number) {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const day = date.toLocaleString("en-EN", { day: "2-digit" }); // Get the day
  const month = date.toLocaleString("en-EN", { month: "short" }); // Get the month (abbreviated)

  return `${day} ${month}`; // Return formatted string
}

function formatDay(epoch: number) {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const weekday = date.toLocaleString("ko-KR", { weekday: "long" }); // Get the day of the week

  return weekday;
}

const WeekInfo = ({ data }: Props) => {
  return (
    <>
      <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
        <div className="w-fit h-10 flex items-center gap-2">
          {data.isDay ? (
            <img src={`src/assets/icons/${data.iconCode}d.svg`} alt="" className="h-7 w-7" />
          ) : (
            <img src={`src/assets/icons/${data.iconCode}n.svg`} alt="" className="h-7 w-7" />
          )}

          <div className="flex items-center gap-1 w-20">
            <div className="w-full h-full flex items-start gap-[2px]">
              <span className="poppins-medium scroll-m-20 text-lg tracking-tight font-semibold text-red-600">{data.maxTemp}</span>
              <span className="text-xs font-normal mt-1">&#8451;</span>
            </div>
            <div className="w-full h-full flex items-start gap-[2px]">
              <span className="poppins-medium scroll-m-20 text-lg tracking-tight font-semibold text-sky-600">{data.minTemp}</span>
              <span className="text-xs font-normal mt-1">&#8451;</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-5 mb-1">
          <small className="text-sm leading-none">{formatDate(Number(data.date))}</small>
          <small className="text-sm leading-none">{formatDay(Number(data.date))}</small>
        </div>
      </div>
    </>
  );
};
export { WeekInfo };
