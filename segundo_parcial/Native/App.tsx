import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamForm from './components/TeamForm';  // Ajusta las rutas
import TeamDetails from './components/TeamDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TeamForm">
        <Stack.Screen name="TeamForm" component={TeamForm} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
