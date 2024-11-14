import { Card, CardContent, CardDescription, CardHeader } from "@/components";

interface Props {
  title: string;
  Description: string;
  imgUrl: string;
  num: number;
  sign: string;
}

const HighlightsOption = ({ title, Description, imgUrl, num, sign }: Props) => {
  return (
    <>
      <Card className="w-full h-fit bg-neutral-50">
        <CardHeader>
          <CardDescription className="font-semibold text-neutral-700 ">
            {title} <span className="text-neutral-400 font-normal ml-1">{Description}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <img src={imgUrl} alt="" className="h-10 w-10" />
          <p className="poppins-medium scroll-m-20 tracking-tight text-3xl font-semibold">
            {num}
            <span className="text-lg ml-1">{sign}</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};
export { HighlightsOption };
