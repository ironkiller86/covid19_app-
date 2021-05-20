/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import MainScreen from './Components/MainScreen';
import {
  SafeAreaView,
  ImageBackground
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('./img/home.jpg')} style={{ flex: 1, resizeMode: 'contain' }}>
        <MainScreen />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
