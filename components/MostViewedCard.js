import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const MostViewedCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Image source={{uri: imgUrl}} style={styles.imageStyle} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          left: 10,
        }}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Image
          source={require('../assets/icons/chevronRight.png')}
          resizeMode="contain"
          style={{
            width: 10,
            height: 10,
            tintColor: '#fff',
            backgroundColor: '#f4b942',
            padding: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MostViewedCard;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#faf8fd',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  titleStyle: {
    fontFamily: 'Bold',
    fontSize: 12,
    // color: '#9058f7',
    color: '#000',
    marginRight: 5,
  },
});
