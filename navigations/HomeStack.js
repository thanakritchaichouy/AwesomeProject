import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex01 from "../screens/week02/Ex01";
import Ex02 from "../screens/week02/Ex02";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator initialRouteName="Ex01">
      <Stack.Screen
        name="Ex01"
        component={Ex01}
        options={{ title: "Exercise 01" }}
      />      
      <Stack.Screen
        name="Ex02"
        component={Ex02}
        options={{ title: "Exercise 02" }}
      />
    </Stack.Navigator>
  );
}

  

