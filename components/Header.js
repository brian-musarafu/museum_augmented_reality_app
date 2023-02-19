import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      {/* Header */}
      <View>
        <Image
          style={styles.accountProfile}
          source={{
            uri: 'https://scontent.fhre1-1.fna.fbcdn.net/v/t39.30808-6/330977130_729593605180766_3061050376887023796_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ClfP1nhUe5IAX-4YSx-&_nc_oc=AQnxmRGxArhjt1U1ShcgGrhQHNhrL7Lt_3XiAdJzrVtPcqxeyb--sfQe0MQOPq7A37M&_nc_ht=scontent.fhre1-1.fna&oh=00_AfDZ9DTHq5YzJ9WPfEAZT0ZbnX4ZfVXvsFK9QUw_w4-31Q&oe=63F25417',
          }}
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
        <View>
          <Text style={styles.accountLocation}>Current Location</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
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
    alignItems: 'center',
  },
  accountName: {
    marginRight: 5,
    marginLeft: 10,
    fontFamily: 'Regular',
  },
  accountProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  accountLocation: {
    marginTop: -5,
    marginLeft: 10,
    fontFamily: 'Bold',
    fontSize: 15,
  },
});
