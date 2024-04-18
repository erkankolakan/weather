import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeEntry from "../components/HomeEntry";

const Home = () => {
  return (
    <View className="bg-bgBlack flex-1">
      <View className="flex-1  mx-2 justify-center items-center my-2">
        {/* HomeEntry comp */}
        <View className="flex-[2] w-full bg-orange-300 justify-between relative rounded-lg overflow-hidden my-2">
          {/* hava durumuna göre arkapa plan resmi */}
          <HomeEntry />
        </View>
        <View className="flex-[2] w-full bg-gray-900 rounded-md overflow-hidden my-2"></View>
        <View className="flex-[1] w-full bg-orange-500 my-2">
          <Text>asd</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
