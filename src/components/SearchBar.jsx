import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Box, Input, Spinner, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { selectMatchingCities } from "../utils/cityFormatters"; 
import { getWeatherData } from "../utils/WeatherOperations"; 
import axios from "axios";


const SearchBar = () => {
  const [text, onChangeText] = useState(""); // Boş bir string olarak başlatın
  const [cityList, setCityList] = useState([]); // Şehir listesi için state
  const [loading, setLoading] = useState(false); // Yükleme durumu için state
  const navigation = useNavigation();
  
  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      if (text.trim() !== "") {
        const cities = await selectMatchingCities(3, text);
        setCityList(cities);
      } else {
        setCityList([]);
      }
      setLoading(false);
    };
  
    fetchCities();
  }, [text]);
  

  const handleCityPress = async (city) => {
    const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city.cityName}&limit=5&appid=${process.env.API_KEY}`;
    try {
        const response = await axios.get(API_URL);
        const { lat, lon } = response.data[0];
        const weatherData = await getWeatherData(lat, lon);
        navigation.navigate("Home",
          {
            city: city,
            weatherData: weatherData,
          }
      );
    } catch (error) {
        console.error('Error fetching city data:', error);
    }
};



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
          value={text}
          onChangeText={onChangeText}
        />
        {loading && (
          <Spinner
            accessibilityLabel="Loading posts"
            className="absolute right-4 h-full"
            size="sm"
            color="blue.500"
          />
        )}
      </Box>
      <View className=" w-[70%] rounded-md overflow-hidden">
        {cityList.map((city, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCityPress(city)}
            className="bg-searchBg h-14  justify-center pl-2 border-black border-b-[1px] "
            activeOpacity={0.8}
          >
            <Text className="text-white font-nunitoSemiBold">
              {city.cityName} - {city.country}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchBar;
