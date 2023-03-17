/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import {useTimeout, useToggle} from '../hooks';

const Timer = () => {
  const [loading, toggleLoading] = useToggle(true);
  useTimeout(() => loading && toggleLoading(), 3000, [loading]);

  return (
    <View style={[styles.view]}>
      <Text style={[styles.title]}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && <ActivityIndicator size="large" color="#512da8" />}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: '#ef5350'},
  title: {fontSize: 30, fontWeight: '600'},
});

export default Timer;
