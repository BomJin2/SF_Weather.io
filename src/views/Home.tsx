import { TodayCard, Header, Hourly, KakaoMap, TodayHighlight, SevenDays } from "@/components";

function HomePage() {
  return (
    <>
      <div className="page ">
        <div className="page__container bg-neutral-50">
          <Header />
          <div className="w-full h-full flex flex-col items-center justify-start p-6 gap-5">
            {/* 상단 3개 위젯 */}
            <div className="w-full flex items-center gap-6">
              <TodayCard />
              <Hourly />
              <KakaoMap />
            </div>
            {/* 하단 2개 위젯 */}
            <div className="w-full flex items-center gap-6">
              <TodayHighlight />
              <SevenDays />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
