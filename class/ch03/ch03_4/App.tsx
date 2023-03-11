import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: '#b3e5fc'},
});

export default App;
