import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import { Home } from "./src/screens/index";


export default function App() {

  const Stack = createStackNavigator();
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
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
