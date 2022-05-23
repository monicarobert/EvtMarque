import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PageLogin from './app/pages/PageLogin';
import PagePrincipale from './app/pages/PagePrincipale';
import PageCreeCompte from './app/pages/PageCreeCompte';
import PageMesEvts from './app/pages/PageMesEvts';


const Stack = createNativeStackNavigator();

//          <Stack.Screen options={{headerShown: false}} name="Login" component={PageLogin} />

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={PageLogin} />
      <Stack.Screen name="MesEvts" component={PageMesEvts} />
      <Stack.Screen name="CreeCompte" component={PageCreeCompte} />
      <Stack.Screen name="Principale" component={PagePrincipale} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
