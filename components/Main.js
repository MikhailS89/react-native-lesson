import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { globalStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
  const loadScene = (item) => {
    navigation.navigate('FullInfo', { name: item.name, anons: item.anons, full: item.full, key: item.key, image: item.image });
  };

  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google.....long..', full: 'Google is cool', key: '1', image: 'https://itproger.com/img/courses/1562741662.jpg' },
    { name: 'Apple', anons: 'Apple.....long..', full: 'Apple is cool', key: '2', image: 'https://itproger.com/img/courses/1505555017.jpg' },
    { name: 'VK', anons: 'VK.....long..', full: 'VK is cool', key: '3', image: 'https://itproger.com/img/courses/1486299902.jpg' }
  ]);

  const [open, isOpen] = useState(false)

  const generatorKey = () => Math.random().toString(36).substring(7);

  const addArticle = (article) => {
    setNews([...news, { ...article, key: generatorKey()}]);
    isOpen(!open);
  };

  return (
    <View style={globalStyle.main}>
        <Modal visible={open}>
          <Ionicons name="close" size={24} color="black" style={styles.iconClose} onPress={() => isOpen(!open)}/>
          <View>
            <Text style={styles.title}>
              Форма добавления статей
            </Text>
            <Form addArticle={addArticle}/>
          </View>
        </Modal>
        <Ionicons name="add" size={24} color="black" onPress={() => isOpen(!open)}/>
        <Text style={[globalStyle.title, styles.header]}>Главная</Text>
        <FlatList data={news} renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => loadScene(item)}>
            <View style={styles.box}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: '100%',
                  height: 200
                }}
              />
              <Text style={styles.title}>{ item.name }</Text>
              <Text style={styles.anons}>{ item.anons }</Text>
            </View>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconTitle: {

  },
  iconClose: {
    textAlign: 'right',
    marginHorizontal: 20,
    marginVertical: 20
  },
  box: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  header: {
    marginBottom: 30
  },
  item: {
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  }
});
