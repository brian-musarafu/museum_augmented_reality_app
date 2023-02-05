import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Categories from '../components/Categories';
import ItemsFeed from '../components/ItemsFeed';

const Artifacts = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.pageStyle}>
      <View style={styles.searchInputArea}>
        {/* Icon */}
        <Image
          source={require('../assets/icons/searchIcon.png')}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: '#9059f6',
          }}
        />
        <TextInput
          style={styles.searchInputText}
          keyboardType="default"
          placeholder="Search for artifacts...."
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.categoriesView}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 3,
          }}>
          <Text style={styles.mostViewedTitle}>Categories</Text>
          <Image
            source={require('../assets/icons/chevronDown.png')}
            resizeMode="contain"
            style={{
              width: 10,
              height: 10,
              tintColor: '#9058f7',
            }}
          />
        </View>
        <View>
          <Categories />
        </View>
        <View>
          <ItemsFeed />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Artifacts;
const styles = StyleSheet.create({
  pageStyle: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 150,
  },
  searchInputArea: {
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fbf8fd',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 3,
  },
  searchInputText: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'SemiBold',
    width: '100%',
    marginLeft: 5,
  },
  categoriesView: {},
  mostViewedTitle: {
    fontFamily: 'Bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
  },
});
