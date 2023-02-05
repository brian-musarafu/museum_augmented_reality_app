import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.pageStyle}>
      <Header />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  pageStyle: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
});
