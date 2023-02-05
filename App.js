import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
