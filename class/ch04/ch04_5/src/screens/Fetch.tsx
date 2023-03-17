/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Country from './Country';
import * as D from '../data';
import {useAsync} from '../hooks';

const Fetch = () => {
  const [Countries, setCountries] = useState<D.ICountry[]>([]);
  const [error, resetError] = useAsync(async () => {
    setCountries([]);
    resetError();
    const countries = await D.getCountries();
    setCountries(countries);
  });

  return (
    <View style={[styles.view]}>
      <Text style={[styles.title]}>Fetch</Text>

      {error && <Text>{error.message}</Text>}

      <FlatList
        data={Countries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: '#ec407a'},
  title: {fontSize: 20, fontWeight: '600'},
  separator: {borderBottomColor: '#e3f2fd', borderBottomWidth: 1},
});
