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
            uri: 'https://scontent.fhre1-1.fna.fbcdn.net/v/t39.30808-6/322692020_1152843278935133_1980589386525220045_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zk6LwkB6OJgAX8N9rvF&tn=8fn_zEYtzWvQ-mTD&_nc_ht=scontent.fhre1-1.fna&oh=00_AfBZ2v0BgcuLKr8Neqvt1iyc3iM-jpJfVXguYKexGE7x5g&oe=63DCB2E0',
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
