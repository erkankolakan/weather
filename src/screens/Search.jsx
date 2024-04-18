import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Box, Input } from "native-base";

import Background from "../../assets/Background";
import IWeatherLogo from "../../assets/iWeatherLogo";
import SearchBar from "../components/SearchBar";
import axios from 'axios';



const Search = () => {


  // const kolakan = async() => {
  //   try {
  //     const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=2a29d93c537a9b13e618698cbf424846");
  //     console.log(response);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  
  // kolakan()
  


  return (
      <ScrollView  >
        {/* logo */}
        <SafeAreaView className="h-[97.2vh] ">
          <View className="w-full mt-5 justify-center items-center ">
            <IWeatherLogo />
          </View>

          {/* sayfa içeriği */}
          <SearchBar />

          {/* background Image */}
          <View className="absolute h-screen w-screen -z-30">
            <Background />
          </View>
        </SafeAreaView>
      </ScrollView>
  );
};

export default Search;
