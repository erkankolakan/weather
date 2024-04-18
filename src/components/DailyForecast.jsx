import { View, FlatList, Image, Text } from "react-native";
import React from "react";

const DailyForecast = () => {
  const DATA = [
    {
      id: "1",
      day: "Pzt",
      value: "26°c",
      img: require("../../assets/weather-icons/Cloudy_Night.png"),
    },
    {
      id: "2",
      day: "Salı",
      value: "26°c",
      img: require("../../assets/weather-icons/Mist.png"),
    },
    {
      id: "3",
      day: "Çrş",
      value: "26°c",
      img: require("../../assets/weather-icons/Rain_Night.png"),
    },
    {
      id: "4",
      day: "Prş",
      value: "26°c",
      img: require("../../assets/weather-icons/Storm_Day.png"),
    },
    {
      id: "5",
      day: "Cum",
      value: "26°c",
      img: require("../../assets/weather-icons/Cloudy_Night.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View className="justify-center items-center">
      <View className=" w-full  px-1">
        <Text className="text-white text-base font-semibold text-center">
          {item.day}
        </Text>
        <Image source={item.img} style={{ width: 70, height: 70 , resizeMode: 'contain'}} />
        <Text className="text-white text-base font-semibold text-center">
          {item.value}
        </Text>
        <Text className="text-gray-400 text-base font-semibold text-center">
          {item.value}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="h-full w-ful rounded-md items-center justify-center">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default DailyForecast;
