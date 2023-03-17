/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useLayout} from '../hooks';

const LifeCycle = () => {
  const [Layout, setLayout] = useLayout();

  return (
    <View onLayout={setLayout} style={[styles.view]}>
      <Text style={[styles.title]}>LifeCycle</Text>
      <Text>layout: {JSON.stringify(Layout, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: '#bbdefb'},
  title: {fontSize: 30, fontWeight: '600'},
});

export default LifeCycle;
