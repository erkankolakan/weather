import { View, Text, Image } from "react-native";
import React from "react";

// componenetler
import HomeEntry from "../components/HomeEntry";
import HomeWeatherDetails from "../components/HomeWeatherDetails";
import DailyForecast from "../components/DailyForecast";

const Home = ({route: {params: { weatherData, city }}}) => {

  return (
    <View className="bg-bgBlack flex-1">
      <View className="flex-1  mx-2 justify-center items-center my-2">
        {/* HomeEntry comp */}
        <View className="flex-[2] w-full bg-orange-300 justify-between relative rounded-lg overflow-hidden my-2">
          {/* hava durumuna göre arkapa plan resmi */}
          <HomeEntry 
            weatherData={weatherData}
            city={city}
          />
        </View>
        <View className=" w-full bg-gray-900 rounded-md overflow-hidden my-2">
          <HomeWeatherDetails  
            weatherData={weatherData}
          />
        </View>
        <View className="h-40 w-full my-2 bg-gray-900">
          <DailyForecast 
            weatherData={weatherData}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
