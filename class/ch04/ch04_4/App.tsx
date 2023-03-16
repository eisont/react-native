/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useCallback, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Fetch from './src/screens/Fetch';
import Interval from './src/screens/Interval';
import LifeCycle from './src/screens/LifeCycle';
import Timer from './src/screens/Timer';

const App = () => {
  const selects = useMemo(
    () => ['lifeCycle', 'timer', 'interval', 'fetch'],
    [],
  );

  const [select, setSelect] = useState<string>(selects[0]);
  const onPress = useCallback((text: string) => () => setSelect(text), []);
  const buttons = useMemo(
    () =>
      selects.map(text => (
        <Text key={text} onPress={onPress(text)} style={styles.button}>
          {text}
        </Text>
      )),
    [],
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBar}>{buttons}</View>
      {select === 'lifeCycle' && <LifeCycle />}
      {select === 'timer' && <Timer />}
      {select === 'interval' && <Interval />}
      {select === 'fetch' && <Fetch />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  topBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: '#03a9f4',
  },
  button: {fontSize: 20, color: 'white'},
});

export default App;
