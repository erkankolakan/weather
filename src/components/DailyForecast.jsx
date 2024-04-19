import { View, FlatList, Image, Text } from "react-native";
import React from "react";
import { iconUrls } from "../utils/constants";

const DailyForecast = ({ weatherData }) => {
  const generateForecastData = () => {
    const dailyData = weatherData.daily.slice(0, 5); 
    return dailyData.map((dayData, index) => {
      const date = new Date(dayData.dt * 1000); 
      const day = date.toLocaleDateString("en-US", { weekday: "short" }); 
      const maxTemp = Math.round(dayData.temp.max - 273.15); 
      const minTemp = Math.round(dayData.temp.min - 273.15);
      const weatherIcon = dayData.weather[0].icon;
      const img = iconUrls[weatherIcon]; 
      return {
        id: index.toString(),
        day: day,
        maxTemp: `${maxTemp}°c`,
        minTemp: `${minTemp}°c`,
        img: img,
      };
    });
  };

  const renderItem = ({ item }) => (
    <View className="justify-center items-center">
      <View className=" w-full  px-1">
        <Text className="text-white text-base font-semibold text-center">
          {item.day}
        </Text>
        <Image source={item.img} style={{ width: 70, height: 70 , resizeMode: 'contain'}} />
        <Text className="text-white text-base font-semibold text-center">
          {item.maxTemp}
        </Text>
        <Text className="text-gray-400 text-base font-semibold text-center">
          {item.minTemp}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="h-full w-ful rounded-md items-center justify-center">
      <FlatList
        data={generateForecastData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default DailyForecast;
