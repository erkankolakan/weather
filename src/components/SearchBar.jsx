import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Input, Spinner,Heading } from "native-base";

const SearchBar = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View className="h-screen absolute w-full gap-y-4  justify-center items-center ">
      <View>
        <Text className="text-3xl font-nunito text-white text-center ">
          Welcome to <Text className="text-blueText">TypeWeather</Text>
        </Text>
        <Text className="text-gray-300 font-nunito text-sm text-center">
          Choose a location to see the weather forecast
        </Text>
      </View>
      {/* TextInput */}
      <Box alignItems="center" className="-mb-2">
        <Input
          placeholder="Search Location"
          className="bg-cardBg text-white relative text-sm font-nunitoSemiBold h-14"
          variant="unstyled"
          w="70%"
          // value={text}
          onChangeText={onChangeText}
        />
        <Spinner accessibilityLabel="Loading posts"
          className="absolute right-4 h-full" size="sm" color="blue.500"
        />
      </Box>
      <View className=" w-[70%] rounded-md overflow-hidden">
        <TouchableOpacity
          className="bg-searchBg h-14  justify-center pl-2 border-black border-b-[1px] "
          activeOpacity={0.8}
        >
          <Text className="text-white font-nunitoSemiBold ">Istanbul</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-searchBg h-14  justify-center pl-2 border-black border-b-[1px] "
          activeOpacity={0.8}
        >
          <Text className="text-white font-nunitoSemiBold ">Istanbul</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-searchBg h-14  justify-center pl-2 border-black border-b-[1px] "
          activeOpacity={0.8}
        >
          <Text className="text-white font-nunitoSemiBold ">Istanbul</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
