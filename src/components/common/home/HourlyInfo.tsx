import { Card } from "@/components";

interface Props {
  time: string;
  imgUrl: string;
  temperature: number;
}

const HourlyInfo = ({ time, imgUrl, temperature }: Props) => {
  return (
    <>
      <Card className="w-24 min-w-24 h-fit flex flex-col items-center pt-[10px] pb-[6px] gap-1 bg-neutral-50">
        <span className="text-sm">{time}</span>
        <img src={imgUrl} alt="" className="w-14 h-14" />
        <div className="w-full flex items-start justify-center">
          <span className="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">{temperature}</span>
          <span className="text-[13px] ml-[1px] mt-[1px] font-medium">&#8451;</span>
        </div>
      </Card>
    </>
  );
};
export { HourlyInfo };
