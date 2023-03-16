import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import * as D from '../data';

const avatars = D.makeArray(200).map(_ => D.randomAvatarUrl());

const Content = () => {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
    </View>
  ));

  return (
    <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // flex: 1, // 이것을 쓰면 스크롤 안된다.
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
});

export default Content;
