import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Color from 'color';

console.log(MD2Colors.blue500);
console.log(Color(MD2Colors.blue500).alpha(0.5).lighten(0.5).string());
const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.blue500,
  },
  text: {
    fontSize: 30,
    color: Color(MD2Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
});

export default App;
