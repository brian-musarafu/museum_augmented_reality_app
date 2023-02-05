import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LiveStream from '../screens/LiveStream';
import Artifacts from '../screens/Artifacts';
import {Image, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#9059f6',
          borderRadius: 20,
          height: 70,
          ...StyleSheet.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/homeOutlined.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#f4b942' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fec93d' : '#fff',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Streem"
        component={LiveStream}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/scannerOutline.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#f4b942' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fec93d' : '#fff',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                STREAM
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Artifacts}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/gridOutlined.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#f4b942' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fec93d' : '#fff',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                ARTIFACTS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
