/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import * as D from '../data';
import color from 'color';
import Person from './Person';
// import {UseClock} from '../hooks';

const title = 'Memo';

const Memo = () => {
  // const time = UseClock();
  const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), []);

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        style={[styles.flatList]}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, _) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#0d47a1'},
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeparator: {
    borderWidth: 1,
    borderColor: color('#9e9e9e').lighten(0.5).string(),
  },
});

export default Memo;
