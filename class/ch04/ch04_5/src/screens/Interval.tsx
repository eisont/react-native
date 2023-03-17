import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Avatar} from '../components';
import * as D from '../data';
import {useInterval} from '../hooks';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>;

const Interval = () => {
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([]);
  const [start, setStart] = useState(true);
  const toggleStart = useCallback(() => setStart(prev => !prev), []);
  const clearAvatars = useCallback(() => setAvatars(_ => []), []);

  useInterval(
    () => {
      if (start) {
        setAvatars(Avatars => [
          ...Avatars,
          {id: D.randomId(), avatar: D.randomAvatarUrl()},
        ]);
      }
    },
    10000,
    [start],
  );

  const children = avatars.map(({id, avatar}) => (
    <Avatar
      key={id}
      uri={avatar}
      size={70}
      viewStyle={styles.avatarViewStyle}
    />
  ));

  return (
    <View style={styles.view}>
      <View style={styles.topBar}>
        <Text onPress={toggleStart} style={[styles.topBarText]}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatars} style={[styles.topBarText]}>
          clear avatars
        </Text>
      </View>
      <Text style={styles.title}> Interval</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: '#7e57c2'},
  title: {fontSize: 30, fontWeight: '600'},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: '#0d47a1',
  },
  topBarText: {fontSize: 20, color: 'white'},
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatarViewStyle: {padding: 5},
});

export default Interval;
