/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Country from './Country';
import * as D from '../data';

const Fetch = () => {
  const [countries, setCountries] = useState<D.ICountry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    D.getCountries().then(setCountries).catch(setError);
  }, []);

  return (
    <View style={[styles.view]}>
      <Text style={[styles.title]}>Fetch</Text>

      {error && <Text>{error.message}</Text>}

      <FlatList
        data={countries}
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
