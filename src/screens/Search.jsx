import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Box, Input } from "native-base";

import Background from "../../assets/Background";
import IWeatherLogo from "../../assets/iWeatherLogo";
import SearchBar from "../components/SearchBar";

const Search = () => {


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
