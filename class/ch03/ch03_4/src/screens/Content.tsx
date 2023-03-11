import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const title = 'Content';

const Content = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <View style={[{flex: 0, backgroundColor: '#f44336'}]}>
        <Text>flex: 0</Text>
      </View>
      <View style={[{flex: 1, backgroundColor: '#4caf50'}]}>
        <Text>flex: 1</Text>
      </View>
      <View style={[{flex: 2, backgroundColor: '#9c27b0'}]}>
        <Text>flex: 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#03a9f4'},
  text: {fontSize: 20, color: 'white'},
});

export default Content;
