import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ItemsCard from './ItemsCard';

const ItemsFeed = () => {
  return (
    <ScrollView
      horizontal
      showsScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 15,
      }}>
      <ItemsCard
        imageUrl="https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/07/Zimbabwe-Bird.jpg"
        title="Zimbabwean Bird"
        steps="215"
        location="2nd Floor"
      />
      <ItemsCard
        imageUrl="https://taxidermytrophiesforsale.com/wp-content/uploads/2017/06/15000-060-R-300x300.jpg"
        title="Zimbabwe Tribal Art"
        steps="215"
        location="2nd Floor"
      />
      <ItemsCard
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nyaminyami.jpg/1200px-Nyaminyami.jpg"
        title="Nyami Nyami"
        steps="215"
        location="2nd Floor"
      />
      <ItemsCard
        imageUrl="https://www.4cosplay.net/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/h/a/harry_potter_luna_s_wand_5_.jpg"
        title="Lobengula's Wand"
        steps="215"
        location="2nd Floor"
      />
    </ScrollView>
  );
};

export default ItemsFeed;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
