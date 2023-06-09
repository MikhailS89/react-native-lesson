import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {



  return (
    <View>
        <Formik initialValues={{name: '', anons: '', full: '', image: ''}} onSubmit={(values, action) => {
            addArticle(values);
            action.resetForm();
        }}>
            {(props) => (
                <View>
                    <TextInput
                        style={styles.input}
                        value={props.values.name}
                        placeholder='Введите название'
                        onChangeText={props.handleChange('name')}
                    />
                    <TextInput
                        style={styles.input}
                        value={props.values.anons}
                        multiline
                        placeholder='Введите ананос'
                        onChangeText={props.handleChange('anons')}
                    />
                    <TextInput
                        style={styles.input}
                        value={props.values.full}
                        multiline
                        placeholder='Введите статью'
                        onChangeText={props.handleChange('full')}
                    />
                    <TextInput
                        style={styles.input}
                        value={props.values.image}
                        placeholder='Укажите фото'
                        onChangeText={props.handleChange('image')}
                    />
                    <Button title='Добавить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5
    }
});
