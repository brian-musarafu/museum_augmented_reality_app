import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import ItemsFeed from '../components/ItemsFeed';
import MostViewed from '../components/MostViewed';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.pageStyle}>
      <View style={styles.headerWrapper}>
        {/* Header */}
        <View>
          <Image
            style={styles.accountProfile}
            source={{
              uri: 'https://scontent.fhre1-1.fna.fbcdn.net/v/t39.30808-6/322692020_1152843278935133_1980589386525220045_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zk6LwkB6OJgAX8N9rvF&tn=8fn_zEYtzWvQ-mTD&_nc_ht=scontent.fhre1-1.fna&oh=00_AfBZ2v0BgcuLKr8Neqvt1iyc3iM-jpJfVXguYKexGE7x5g&oe=63DCB2E0',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 3,
          }}>
          <Text style={styles.accountName}>Brian Musarafu</Text>
          <Image
            source={require('../assets/icons/chevronDown.png')}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              tintColor: '#9058f7',
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.welcomeViewArea}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 3,
              }}>
              <Text style={styles.welcomeAreaText}>Welcome </Text>
              <Image
                source={require('../assets/icons/handWave.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <Text style={styles.welcomeTextMuseumName}>
            Bulawayo National Museum
          </Text>
        </View>
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
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 3,
              }}>
              <Text style={styles.mostViewedTitle}>Most Viewed</Text>
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
            <MostViewed />
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageStyle: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 150,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  accountName: {
    marginRight: 5,
    marginLeft: 10,
    fontFamily: 'Bold',
  },
  accountProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  welcomeViewArea: {
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeAreaText: {
    fontFamily: 'SemiBold',
    fontSize: 15,
    color: 'grey',
    marginRight: 5,
  },
  welcomeTextMuseumName: {
    fontFamily: 'Bold',
    fontSize: 22,
    letterSpacing: -0.5,
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
  categoriesView: {
    marginBottom: 30,
  },
  mostViewedTitle: {
    fontFamily: 'Bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
  },
});
