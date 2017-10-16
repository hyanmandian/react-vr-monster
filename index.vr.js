import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('world.jpg')}/>
        <AmbientLight intensity={ 0.5 }  />
        <Model
          source={{ obj: asset('haunted-freddy.obj'), mtl: asset('haunted-freddy.mtl')}}
          style={{ transform: [ {translate: [0, -20, -100]}, {scale: 0.5 } ]}}
          lit={true}
        />
        <Model
          source={{ obj: asset('street-ligths.obj'), mtl: asset('street-ligths.mtl')}}
          style={{
            transform: [
              { translate: [0, -20, -30] },
              { rotateY: "90deg" },
              { scale: 30 }
            ],
          }}
          lit={true}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
