/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';

const Timer = () => {
  const [loading, setLoading] = useState(true);
  const toggleLoading = useCallback(() => setLoading(prev => !prev), []);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(id);
  }, [loading]);

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
