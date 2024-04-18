import { View, Text, Image } from "react-native";
import React from "react";

const HomeEntry = () => {
  return (
    <>
      <Image
        source={require("../../assets/bg-images/Few-Clouds_Night.jpg")}
        className="w-full h-full object-cover absolute inset-0 "
      />
      {/* Girilen yere göre konum ve tarih */}
      <View className="h-24 w-full pl-4 justify-center">
        <Text className="text-2xl font-nunitoSemiBold text-white">
          Istanbul, TR
        </Text>
        <Text className="text-base font-nunito text-white">
          Monday, May 15, 2023
        </Text>
      </View>
      {/* konumun derecesi ve hava durumunu belli eden resim */}
      <View className="w-full  flex-1 justify-end">
        <View className="justify-around items-center flex-row">
          <View>
            <Text className="text-4xl font-nunitoExtraBold text-white">
              28<Text>°c</Text>
            </Text>
            <Text className="text-xl font-nunitoExtraBold text-white">
              28<Text>°c</Text> /{" "}
              <Text className="text-xl font-nunitoExtraBold text-white">
                32<Text>°c</Text>
              </Text>
            </Text>
            <Text className="text-base font-nunito text-white">Few clouds</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/weather-icons/Few-Clouds_Night.png")}
              className="w-44 h-44 object-cover"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeEntry;
