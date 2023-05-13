import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/style';

export default function FullInfo({ route }) {

  const { name, anons, full, key, image } = route.params;

  return (
    <View style={[globalStyle.main]}>
        <Image
            source={{uri: image}}
            style={{
              width: '100%',
              height: 200
            }}
          />
        <Text style={[globalStyle.title, styles.title]}>{JSON.stringify(name)}</Text>
        <Text style={styles.full}>{JSON.stringify(full)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20
  },
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  }
});
