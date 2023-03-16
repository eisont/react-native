/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import {Image, Text, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar, IconText} from '../components';
import {styles} from './Person.style';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const PersonUsingObjectState: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);

  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });

  const commentIconPressed = useCallback(
    () =>
      setPerson(prev => ({
        ...prev,
        counts: {
          ...prev.counts,
          comment: prev.counts.comment + 1,
        },
      })),
    [],
  );

  const retweetIconPressed = useCallback(
    () =>
      setPerson(prev => ({
        ...prev,
        counts: {
          ...prev.counts,
          retweet: prev.counts.retweet + 1,
        },
      })),
    [],
  );

  const heartIconPressed = useCallback(
    () =>
      setPerson(prev => ({
        ...prev,
        counts: {
          ...prev.counts,
          heart: prev.counts.heart + 1,
        },
      })),
    [],
  );

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name} name</Text>
        <Text style={[styles.email]}>{person.email}email</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color="#586368"
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
          comments
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={commentIconPressed}
            name="comment"
            size={24}
            color="#2196f3"
            textStyle={[styles.iconText]}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={retweetIconPressed}
            name="sync"
            size={24}
            color="#9c27b0"
            textStyle={[styles.iconText]}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={heartIconPressed}
            name="heart"
            size={24}
            color="#f44336"
            textStyle={[styles.iconText]}
            text={person.counts.heart}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonUsingObjectState;
