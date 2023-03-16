/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LifeCycle = () => {
  const title = 'LifeCycle';
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#ab47bc'},
  text: {fontSize: 20, color: 'white'},
});

export default LifeCycle;
