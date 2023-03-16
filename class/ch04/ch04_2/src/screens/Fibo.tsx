/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {fibonacci} from './fibonacci';
import * as D from '../data';

const title = 'Fibo';

const Fibo = () => {
  const memoizedFibonacci = useMemo(() => fibonacci, []);

  const fibos = useMemo(
    () =>
      D.makeArray(20 + 1).map((_, index) => ({
        number: index,
        fibonacci: memoizedFibonacci(index),
      })),
    [],
  );

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        contentContainerStyle={[styles.contentContainerStyle]}
        data={fibos}
        renderItem={({item}) => (
          <Text style={[styles.text]}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#0d47a1'},
  text: {fontSize: 20, color: 'white'},
  contentContainerStyle: {alignItems: 'center'},
});

export default Fibo;
