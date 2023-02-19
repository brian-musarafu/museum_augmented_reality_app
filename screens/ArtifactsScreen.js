import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import AllArtifacts from '../components/AllArtifacts';

const ArtifactsScreen = () => {
  return (
    <SafeAreaView style={styles.pageStyle}>
      {/* Header Component */}

      <Header />

      {/* Search Component */}

      <View style={styles.searchAreaWrapper}>
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
      </View>

      {/* Categories View */}
      <View style={styles.categoriesView}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 3,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.mostViewedTitle}>Categories</Text>
          <Image
            source={require('../assets/icons/arrowRight.png')}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: '#9058f7',
            }}
          />
        </View>
        <View>
          <Categories />
        </View>
        <View>
          <AllArtifacts />
        </View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default ArtifactsScreen;

const styles = StyleSheet.create({
  pageStyle: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 150,
    minHeight: '100%',
  },
  searchAreaWrapper: {
    marginTop: 15,
    marginBottom: 20,
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
});
