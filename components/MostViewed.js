import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MostViewedCard from './MostViewedCard';

const MostViewed = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <MostViewedCard
        imageUrl="https://pbs.twimg.com/media/DHN7u01XoAATrEV.jpg"
        title="Greek Statue"
      />
      <MostViewedCard
        imageUrl="https://www.4cosplay.net/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/h/a/harry_potter_luna_s_wand_5_.jpg"
        title="Greek Statue"
      />
      <MostViewedCard
        imageUrl="https://www.alliphonewallpapers.com/images/wallpapers/640/w5wveftvn.jpg"
        title="Greek Statue"
      />
      <MostViewedCard
        imageUrl="https://www.alliphonewallpapers.com/images/wallpapers/640/w5wveftvn.jpg"
        title="Greek Statue"
      />
      <MostViewedCard
        imageUrl="https://www.alliphonewallpapers.com/images/wallpapers/640/w5wveftvn.jpg"
        title="Greek Statue"
      />
    </ScrollView>
  );
};

export default MostViewed;
