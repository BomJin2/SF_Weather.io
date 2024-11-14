import { Card } from "@/components";
import useFormmatedTime from "@/hooks/useFormmatedTime";
import { HourlyData } from "@/types";

interface Props {
  data: HourlyData;
}

const HourlyInfo = ({ data }: Props) => {
  const usetime = useFormmatedTime(data.time);
  return (
    <>
      <Card className="w-24 min-w-24 h-fit flex flex-col items-center pt-[10px] pb-[6px] gap-1 bg-neutral-50">
        <span className="text-sm">{usetime}</span>
        <img
          src={data.condition.icon.includes("day") ? `src/assets/icons/${data.condition.code}d.svg` : `src/assets/icons/${data.condition.code}n.svg`}
          alt=""
          className="w-14 h-14"
        />
        <div className="w-full flex items-start justify-center">
          <span className="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">{data.temp_c}</span>
          <span className="text-[13px] ml-[1px] mt-[1px] font-medium">&#8451;</span>
        </div>
      </Card>
    </>
  );
};
export { HourlyInfo };
