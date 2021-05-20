/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useEffect} from 'react';
import MainScreen from './Components/MainScreen';
import {SafeAreaView, ImageBackground, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  /*
   *
   */
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  /*
   *
   */
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('./img/home.jpg')}
          style={{flex: 1, resizeMode: 'contain'}}>
          <MainScreen />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default App;
