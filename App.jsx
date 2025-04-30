import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './src/pages/SplashScreen';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Hasil from './src/pages/Hasil';
import HistoryList from './src/pages/History';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return(
    <Drawer.Navigator screenOptions={drawerOptions}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Riwayat' component={HistoryList} />
      <Drawer.Screen name='Sign-Out' component={SplashScreen} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={drawerOptions}>
        <Stack.Screen
          name="SignIn"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hasil"
          component={Hasil}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const drawerOptions = {
  headerStyle: {
    backgroundColor: '#2E8D79',
  },
  headerTintColor: '#FFFFFF',
  headerTitleAlign: 'center',

  drawerStyle: {
    backgroundColor: '#2E8D79',
  },
  drawerActiveBackgroundColor: '#1B5045', 
  drawerInactiveTintColor: '#FFFFFF',
  drawerActiveTintColor: '#FFFFFF',
  drawerLabelStyle: {
    fontSize: 16,
  },
};

export default App;