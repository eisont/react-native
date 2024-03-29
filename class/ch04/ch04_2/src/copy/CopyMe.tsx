import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CopyMe = () => {
  const title = 'CopyMe';
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: ''},
  text: {fontSize: 20, color: 'white'},
});

export default CopyMe;
