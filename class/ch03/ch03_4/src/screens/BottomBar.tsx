import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30,
  iconColor = 'white';
const icons = [
  'home',
  'table-search',
  'face-woman-profile',
  'account-settings',
];

const BottomBar = () => {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));

  return <View style={[styles.view]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    backgroundColor: '#0d47a1',
  },
  text: {fontSize: 20, color: 'white'},
});

export default BottomBar;
