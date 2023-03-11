import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const title = 'CopyMe';

const CopyMe = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: '#0d47a1'},
  text: {fontSize: 20, color: 'white'},
});

export default CopyMe;
