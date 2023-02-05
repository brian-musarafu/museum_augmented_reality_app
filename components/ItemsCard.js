import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ItemsCard = ({imageUrl, title, steps, location}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require('../assets/icons/ball.png')}
        resizeMode="contain"
        style={{
          width: 60,
          height: 60,
          tintColor: '#fec93d',
          position: 'absolute',
          right: 8,
          top: 60,
        }}
      />
      <Image source={{uri: imageUrl}} style={styles.imgStyle} />
      <View style={styles.inforContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 3,
          }}>
          {/* stepIcon */}
          <Image
            source={require('../assets/icons/footPrints.png')}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: 5,
              // tintColor: focused ? '#fec93d' : '#fff',
            }}
          />
          <Text style={styles.stepsLocationTextStyle}>{steps} steps</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 3,
          }}>
          {/* Icon */}
          <Image
            source={require('../assets/icons/institution.png')}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: 5,
            }}
          />
          <Text style={styles.stepsLocationTextStyle}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemsCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    backgroundColor: '#fbf8fd',
    borderRadius: 20,
  },
  imgStyle: {
    height: 200,
    width: 200,
    marginTop: 6,
  },
  inforContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleStyle: {
    fontFamily: 'Bold',
    fontSize: 16,
  },
  stepsLocationTextStyle: {
    fontFamily: 'Bold',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'grey',
  },
});