import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ex02 from './screens/week02/Ex02';
import Travel from './screens/week03/Travel';



export default function App() {
  return (
    //<Home/>
    <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
}


