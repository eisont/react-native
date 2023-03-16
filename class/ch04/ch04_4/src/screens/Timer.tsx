/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Timer = () => {
  const title = 'Timer';
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#ef5350'},
  text: {fontSize: 20, color: 'white'},
});

export default Timer;
