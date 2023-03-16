/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Interval = () => {
  const title = 'Interval';
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#7e57c2'},
  text: {fontSize: 20, color: 'white'},
});

export default Interval;
