import React from 'react';
import {StyleSheet, SafeAreaView, Alert, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomBar from './src/screens/BottomBar';
import Content from './src/screens/Content';
import TapBar from './src/screens/TapBar';

const App = () => {
  const iconPressed = () => Alert.alert('Icon pressed.');
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TapBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={iconPressed} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: '#b3e5fc'},
  absoluteView: {
    backgroundColor: '#4a148c',
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35,
  },
});

export default App;
