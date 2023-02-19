import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from '@viro-community/react-viro';

const LiveStream = () => {
  //Register Targets
  ViroARTrackingTargets.createTargets({
    skullImage: {
      source: require('../assets/artifacts/Skull/Skull.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165, //Real World width in metres
      type: 'Image',
    },
  });

  const anchorFound = () => {
    console.log('Anchor/Image Detected');
  };

  return (
    <ViroARScene>
      <ViroARImageMarker target={'skullImage'} onAnchorFound={anchorFound}>
        <ViroAmbientLight color="#ffffff">
          <Viro3DObject
            source={require('../assets/artifacts/Skull/12140_Skull_v3_L2.obj')}
            scale={[0.5, 0.5, 0.5]}
            // rotation={[-170, 0, 0]}
            type="OBJ"
          />
        </ViroAmbientLight>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator autofocus={true} initialScene={{scene: LiveStream}} />
  );
};
