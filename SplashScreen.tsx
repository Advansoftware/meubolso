import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';





export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);


  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}