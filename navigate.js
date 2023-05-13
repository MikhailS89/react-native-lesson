import * as React from 'react';
import Main from './components/Main';
import Contacts from './components/Contacts';
import FullInfo from './components/FullInfo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                  title: 'Главная',
                  headerStyle: {
                    backgroundColor: 'silver',
                    height: 100
                  },
                  headerTitleStyle: {
                    fontWeight: 'light',
                    color: 'white',
                    marginHorizontal: '20%'
                  }
                }}
            />
            <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{ title: 'Контакты' }}
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{ title: 'Статья' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }