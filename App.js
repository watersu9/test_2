import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Frame from './screens/Frame';
import SNSUpload1 from './screens/SNSUpload1';
import SNSUpload2 from './screens/SNSUpload2';
import Mainpage from './screens/Mainpage';
import LogIn from './screens/LogIn';
import Login1 from './screens/Login1';
import ServiceStart from './screens/ServiceStart';
import CameraScreen from './screens/CameraScreen';
import OpenningScreen from './screens/OpenningScreen';
import SignUp from './screens/SignUp';
import SignUp1 from './screens/SignUp1';
import Home from './screens/Home';
import Exercisevideo from './screens/Exercisevideo';
import SNSUpload from './screens/SNSUpload';

// New screens
import TrainerList from './screens/TrainerList';
import TrainerRequests from './screens/TrainerRequests';
import RegisterDiet from './screens/RegisterDiet';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Frame" component={Frame} />
          <Stack.Screen name="SNSUpload1" component={SNSUpload1} />
          <Stack.Screen name="SNSUpload2" component={SNSUpload2} />
          <Stack.Screen name="Mainpage" component={Mainpage} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Login1" component={Login1} />
          <Stack.Screen name="ServiceStart" component={ServiceStart} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="OpenningScreen" component={OpenningScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUp1" component={SignUp1} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercisevideo" component={Exercisevideo} />
          <Stack.Screen name="SNSUpload" component={SNSUpload} />
          {/* New screens for the trainer functionality */}
          <Stack.Screen name="TrainerList" component={TrainerList} />
          <Stack.Screen name="TrainerRequests" component={TrainerRequests} />
          <Stack.Screen name="RegisterDiet" component={RegisterDiet} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
