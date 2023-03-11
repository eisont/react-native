import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as D from '../data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);

const TopBar = () => {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
      <View style={styles.centerView}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
      <MaterialCommunityIcons name="menu" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#0d47a1',
  },
  text: {fontSize: 20, textAlign: 'center'},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1},
});

export default TopBar;
