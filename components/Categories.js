import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ScrollNav from './ScrollNav';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <ScrollNav title="Statue" />
      <ScrollNav title="Paint" />
      <ScrollNav title="Traditional" />
      <ScrollNav title="Documentary" />
      <ScrollNav title="Statue" />
      <ScrollNav title="Statue" />
      <ScrollNav title="Statue" />
      <ScrollNav title="Statue" />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
