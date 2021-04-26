/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import RegionList from './Components/RegionList';
import {
  SafeAreaView,
} from 'react-native';

const App = () => {
  console.disableYellowBox = true;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegionList />
    </SafeAreaView>
  );
};
export default App;
