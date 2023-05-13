import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalStyle } from './styles/style';
import Navigate from './navigate';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={globalStyle.main}>
      <Navigate/>
    </View>
  );

}

const styles = StyleSheet.create({

});
