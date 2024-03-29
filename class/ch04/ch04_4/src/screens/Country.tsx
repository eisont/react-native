/* eslint-disable prettier/prettier */
import React from 'react';
import type {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as D from '../data';

export type CountryProps = {
  country: D.ICountry;
};

const Country: FC<CountryProps> = ({country}) => {
  const {name, capital, subregion, region, population} = country;

  return (
    <View style={[styles.view]}>
      <View>
        <Text style={[styles.name]}>{`${name.common}`}</Text>
      </View>
      <View>
        <Text>{`capital: ${capital}`}</Text>
        <Text>{`population: ${population}`}</Text>
        <Text>{`subregion: ${subregion}`}</Text>
        <Text>{`region: ${region}`}</Text>
      </View>
    </View>
  );
};

export default Country;

const styles = StyleSheet.create({
  view: {padding: 5},
  name: {fontSize: 30, fontWeight: '400'},
});
