const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Frame from "./screens/Frame";
import SNSUpload1 from "./screens/SNSUpload1";
import Like from "./components/Like";
import Diet1 from "./components/Diet1";
import Calendar from "./components/Calendar";
import SNSUpload2 from "./screens/SNSUpload2";
import Row from "./components/Row";
import StateDateDefault from "./components/StateDateDefault";
import Input1 from "./components/Input1";
import ButtonPrimary from "./components/ButtonPrimary";
import Mainpage from "./screens/Mainpage";
import LogIn from "./screens/LogIn";
import Login1 from "./screens/Login1";
import ServiceStart from "./screens/ServiceStart";
import CameraScreen from "./screens/CameraScreen";
import OpenningScreen from "./screens/OpenningScreen";
import SignUp from "./screens/SignUp";
import SignUp1 from "./screens/SignUp1";
import Home from "./screens/Home";
import SNSUpload from "./screens/SNSUpload";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SNSUpload1"
              component={SNSUpload1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SNSUpload2"
              component={SNSUpload2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mainpage"
              component={Mainpage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiceStart"
              component={ServiceStart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OpenningScreen"
              component={OpenningScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SNSUpload"
              component={SNSUpload}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
