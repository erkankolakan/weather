import { View, Image } from "react-native";
import React from "react";
import IWeatherLogo from "../../assets/iWeatherLogo"; 


const Header = () => {

  return (
    <View className="bg-black h-14 w-full flex-row justify-between items-center px-2 ">
      <View className="">
        {/* <Image
          className="w-28 h-9 "
          source={require("../../assets/iWeatherLogo.jsx")}
          resizeMode="contain"
        /> */}
        <IWeatherLogo className="w-12 bg-red-500" />
      </View>
      {/* ortaya ve sona bir değer eklemek için bu kısımlarda respon olarak eklendi */}
      <View className="flex-1 h-full "></View>
      <View className="w-24 h-full "></View>
    </View>
  );
};

export default Header;
 