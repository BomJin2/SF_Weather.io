import { TodayCard, Header, Hourly, KakaoMap, TodayHighlight, SevenDays } from "@/components";
import { ForecastDay, ForecastTideDay } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultTideData from "@/json/defaultTideData.json";
import defaultWeatherData from "@/json/defaultWeatherData.json";
import { useAtom } from "jotai";
import { cityNameAtom } from "@/stores";

function HomePage() {
  const [cityName, setCityName] = useAtom(cityNameAtom);

  const [tideData, setTideData] = useState<ForecastTideDay | any>(defaultTideData);
  const [weatherData, setWeatherData] = useState(defaultWeatherData);
  const [oneWeek, setOneWeek] = useState([]);

  const fetchApi = async () => {
    const API_KEY = "82e890c6837844ea9e704743241411";
    const BASE_URL = "http://api.weatherapi.com/v1";
    try {
      /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */
      /** CRUD C: create -> post() R : read -> get() U : update -> put() D : delete -> delete() */
      const res = await axios.get(`${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`);
      // console.log(res);

      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (e) {
      /** Promise 인스턴스 방법을 사용했을 땐, reject에 해당 */
      console.error(e);
    } finally {
      /** 비동기 로직이 실행되던 실행되지 않던 무조건 실행되어야만 하는 로직이 작성됨 */
      // console.log("fetchApi 호출은 되었음");
    }
  };

  const fetchTideApi = async () => {
    const API_KEY = "82e890c6837844ea9e704743241411";
    const BASE_URL = "http://api.weatherapi.com/v1";
    /** https://api.weatherapi.com/v1/marine.json?q=seoul&days=1&key=aaaaaaaaaaaaaa */
    try {
      const res = await axios.get(`${BASE_URL}/marine.json?q=seoul&days=1&key=${API_KEY}`);
      // console.log(res);

      if (res.status === 200) {
        setTideData(res.data.forecast.forecastday[0]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      // console.log("호출은 되었어용");
    }
  };

  const getOneWeekWeather = async () => {
    const API_KEY = "82e890c6837844ea9e704743241411";
    const BASE_URL = "http://api.weatherapi.com/v1";
    /** https://api.weatherapi.com/v1/marine.json?q=seoul&days=1&key=aaaaaaaaaaaaaa */
    try {
      const res = await axios.get(`${BASE_URL}/forecast.json?q=seoul&days=7&key=${API_KEY}`);
      // console.log(res);

      if (res.status === 200) {
        const newData = res.data.forecast.forecastday.map((item: ForecastDay) => {
          return {
            maxTemp: Math.round(item.day.maxtemp_c),
            minTemp: Math.round(item.day.mintemp_c),
            date: item.date_epoch,
            iconCode: item.day.condition.code,
            isDay: item.day.condition.icon.includes("day"),
          };
        });
        setOneWeek(newData);
      }
    } catch (e) {
      console.log(e);
    } finally {
      // console.log("호출은 되었어용");
    }
  };

  useEffect(() => {
    fetchApi();
    fetchTideApi();
    getOneWeekWeather();
  }, [cityName]);
  // console.log(tideData);
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
              <TodayHighlight tideData={tideData} currentData={weatherData} />
              <SevenDays data={oneWeek} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
