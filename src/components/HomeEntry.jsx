import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { iconUrls } from "../utils/constants";
import { bgUrls } from "../utils/constants";

const HomeEntry = ({ city, weatherData }) => {
  const weatherCode = weatherData.current.weather[0].icon;
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const iconUrl = iconUrls[weatherCode];
  const bgUrl = bgUrls[weatherCode];

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  // günün en yüksek ve en düşük sıcaklıklarını alımak için fonksiyon forEach ile tüm saatlerin içini gezdik
  const getMinMax = () => {
    let maxTemp = -Infinity;
    let minTemp = Infinity;

    weatherData.hourly.forEach((hour) => {
      const temp = hour.temp;
      if (temp > maxTemp) {
        maxTemp = temp;
      }
      if (temp < minTemp) {
        minTemp = temp;
      }
    });
    setMax(Math.round(kelvinToCelsius(maxTemp)));
    setMin(Math.round(kelvinToCelsius(minTemp)));
  };

  useEffect(() => {
    getMinMax();
  }, []);

  return (
    <>
      <Image
        source={bgUrl}
        className="w-full h-full object-cover absolute inset-0 "
      />
      {/* Girilen yere göre konum ve tarih */}
      <View className="h-20 w-full pl-4 justify-center">
        <Text className="text-2xl font-nunitoSemiBold text-white">
          {city.cityName}, {city.country}
        </Text>
        <Text className="text-base font-nunito text-white">
          {new Date().toDateString()}
        </Text>
      </View>
      {/* konumun derecesi ve hava durumunu belli eden resim */}
      <View className="w-full  flex-1 justify-center ">
        <View className="justify-around items-center flex-row">
          <View>
            <Text className="text-4xl font-nunitoExtraBold text-white">
              {Math.round(kelvinToCelsius(weatherData.current.temp))}
              <Text>°c</Text>
            </Text>
            <Text className="text-xl font-nunitoExtraBold text-white">
              {/* min temp */}
              {min}
              <Text>°c</Text> /{" "}
              <Text className="text-xl font-nunitoExtraBold text-white">
                {/* max temp */}
                {max}
                <Text>°c</Text>
              </Text>
            </Text>
            <Text className="text-base font-nunito text-white">Few clouds</Text>
          </View>
          <View>
            <Image source={iconUrl} className="w-44 h-44 object-cover" />
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeEntry;
