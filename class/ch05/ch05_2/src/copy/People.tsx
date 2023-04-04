/* eslint-disable prettier/prettier */
import React from 'react';
import {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import * as D from '../data';
import {useToggleTheme} from '../contexts';
import Person from './Person';

const People = () => {
  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const add = useCallback(() => {
    setPeople(pe => [...pe, D.createRandomPerson()]);
  }, []);
  const removeAll = useCallback(() => {
    setPeople(_ => []);
  }, []);

  return (
    <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: theme.colors.surface}]}>
        <Text onPress={add} style={styles.text}>
          add
        </Text>
        <Text onPress={removeAll} style={styles.text}>
          remove all
        </Text>
        <View style={{flex: 1}} />
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <FlatList
        data={people}
        renderItem={it => <Person person={it} />}
        keyExtractor={it => it.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20},
});

export default People;
