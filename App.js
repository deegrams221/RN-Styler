import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View style={{ height: 50, backgroundColor: '#2475B0' }} />
      <View style={{ width: 100, height: 100, backgroundColor: '#10A881' }} />
      <View style={{ height: 100, backgroundColor: '#E74292' }} />
    </View>
  );
}

// flex 1 in container view -> means to cover the entire screen
// flex # in inside views -> splits in equal parts

// default of flexDirection is 'column'

// justifyContent top to bottom -> main axis
// alignItems left to right
