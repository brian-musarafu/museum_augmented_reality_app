import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import ArtifactCard from './ArtifactCard';

const AllArtifacts = () => {
  return (
    <ScrollView
      horizontal
      showsScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 15,
      }}>
      <ArtifactCard
        imageUrl="https://ams03pap002files.storage.live.com/y4mMPPZ0h7VXhvlvIYnAi4nPFRs68445kfDzNOA-bfKpArgGbrtOdthT215mkp-HxRMRdO5vtQtej5xpPqU1ZIIJA-PlPjfo7AvzUCP7XBJQvrHNGSrvZfr5_M0_aMkvCdQDKV2DQMns6fLppTZAiDxXi192ykqBvhKrfo_2NQ1xR1lLSqRjCBM2uC2zScEM9xxY5pf3oCAptisPdU7OXNIJqK6Q1Ssi7oTHIaTUsR94xg?encodeFailures=1&width=608&height=410"
        title="Greek statue"
        steps="215"
        location="2nd Floor"
      />
    </ScrollView>
  );
};

export default AllArtifacts;
