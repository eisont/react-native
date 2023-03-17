/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  LayoutChangeEvent,
} from 'react-native';

const LifeCycle = () => {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called');
    return () => console.log(Platform.OS, 'useEffect finished');
  }, []);
  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called');
    return () => console.log(Platform.OS, 'useLayoutEffect finished');
  }, []);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    console.log(Platform.OS, 'onLayout called', layout);
  }, []);
  console.log(Platform.OS, 'render start');

  return (
    <View onLayout={onLayout} style={[styles.view]}>
      <Text style={[styles.Headtext]}>LifeCycle</Text>
      <Text style={[styles.Contenttext]}>console 창 확인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: '#bbdefb'},
  Headtext: {fontSize: 30, fontWeight: '600'},
  Contenttext: {fontSize: 20, fontWeight: '400'},
});

export default LifeCycle;
