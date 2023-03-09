import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('./src/assets/images/bg.jpg')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
