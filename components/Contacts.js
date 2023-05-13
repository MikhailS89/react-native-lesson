import React from 'react';
import { View, Text/*, Button*/ } from 'react-native';
import { globalStyle } from '../styles/style';

export default function Contacts(/*{ navigation }*/) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyle.main}>
        <Text style={globalStyle.title}>О нас</Text>
        {/* <Button title="Назад" onPress={loadScene}/> */}
    </View>
  );
}
