import * as React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './Components/Lab2/components/Routes'
import Index from './Components/Excersise 2/Index';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Index/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }
});
