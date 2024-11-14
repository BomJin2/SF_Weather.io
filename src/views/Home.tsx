import { TodayCard, Header, Hourly, KakaoMap, TodayHighlight, SevenDays } from "@/components";
import { Weather } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const defaultWeatherData: Weather = {
  current: {
    cloud: 0,
    condition: { text: "", icon: "", code: 0 },
    dewpoint_c: 0,
    dewpoint_f: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    humidity: 0,
    is_day: 1,
    last_updated: "",
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: "",
    wind_kph: 0,
    wind_mph: 0,
    windchill_c: 0,
    windchill_f: 0,
  },
  location: {
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  },
  forecast: { forecastday: [] },
};

function HomePage() {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);
  const fetchApi = async () => {
    const API_KEY = "82e890c6837844ea9e704743241411";
    const BASE_URL = "http://api.weatherapi.com/v1";
    //https://api.weatherapi.com/vi/current.json?q=seoul&key=82e890c6837844ea9e704743241411

    try {
      /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */
      /** CRUD C: create -> post() R : read -> get() U : update -> put() D : delete -> delete() */
      const res = await axios.get(`${BASE_URL}/forecast.json?q=seoul&days=7&key=${API_KEY}`);
      console.log(res);

      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (e) {
      /** Promise 인스턴스 방법을 사용했을 땐, reject에 해당 */
      console.error(e);
    } finally {
      /** 비동기 로직이 실행되던 실행되지 않던 무조건 실행되어야만 하는 로직이 작성됨 */
      console.log("fetchApi 호출은 되었음");
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="page ">
        <div className="page__container bg-neutral-50">
          <Header />
          <div className="w-full h-full flex flex-col items-center justify-start p-6 gap-5">
            {/* 상단 3개 위젯 */}
            <div className="w-full flex items-center gap-6">
              <TodayCard data={weatherData} />
              <Hourly data={weatherData.forecast.forecastday[0]} />
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
