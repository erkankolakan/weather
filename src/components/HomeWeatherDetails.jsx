import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";

const HomeWeatherDetails = () => {
  const DATA = [
    {
      id: "1",
      title: "Thermal sensation",
      value: "26 °c",
      icon: "thermometer-outline",
    },
    {
      id: "2",
      title: "Probability of rain",
      value: "0%",
      icon: "rainy-outline",
    },
    {
      id: "3",
      title: "Wind speed",
      value: "8 km/h",
      icon: "wind",
    },
    {
      id: "4",
      title: "Air humidity",
      value: "40%",
      icon: "tachometer-alt",
    },
    {
      id: "5",
      title: "UV Index",
      value: "5",
      icon: "sunny-outline",
    },
  ];

  const renderItem = ({ item }) => (
    <View
    // kapsayıcının sonunda border olmaması için bu şekilde gelen datanın idsine göre bir fonk yazdık
      className={`flex-row justify-between items-center p-4 ${
        item.id === "5" ? "border-b-0" : "border-b-[1px]"
      } border-gray-800`}
    >
      <View className="flex-row items-center">
        {item.icon === "thermometer-outline" ? (
          <Ionicons name="thermometer-outline" size={24} color="white" />
        ) : item.icon === "rainy-outline" ? (
          <Ionicons name="rainy-outline" size={24} color="white" />
        ) : item.icon === "wind" ? (
          <Feather name="wind" size={24} color="white" />
        ) : item.icon === "tachometer-alt" ? (
          <SimpleLineIcons name="drop" size={24} color="white" />
        ) : (
          <Ionicons name="sunny-outline" size={24} color="white" />
        )}
        <Text className="text-white font-nunito text-lg ml-2">
          {item.title}
        </Text>
      </View>
      <Text className="text-white font-nunito text-lg">{item.value}</Text>
    </View>
  );
  //     <View className="border-b-slate-800 border  flex-row items-center justify-between px-4 h-16 ">
  //     <View className="flex-row items-center justify-center">
  //       <FontAwesome5 name="thermometer-half" size={24} color="white" />
  //       <Text className="text-white pl-2 text-base font-nunitoSemiBold">
  //         Thermal sensation
  //       </Text>
  //     </View>
  //     <View>
  //       <Text className="text-white text-base font-nunitoSemiBold">
  //         28<Text>°c</Text>
  //       </Text>
  //     </View>
  //   </View>

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default HomeWeatherDetails;
