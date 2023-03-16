import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Cache from './src/screens/Cache';
import Fibo from './src/screens/Fibo';
import Memo from './src/screens/Memo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  contentContainerStyle: {width: width * numberOfComponents},
});

export default App;
