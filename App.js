import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

// screens
import { Home,Search } from "./src/screens/index";


export default function App() {
  const Stack = createStackNavigator();
  
  
  const [fontsLoaded, fontError] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    nunitoBlack: require("./assets/fonts/Nunito-Black.ttf"),
    nunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
  
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar translucent={false} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        >
          <Stack.Screen name="Search" component={Search} />
          
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
