/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
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

const Person: FC<PersonProps> = ({person}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);
  const countIconPressed = useCallback(
    (name: string) => () => Alert.alert(`${name} pressed.`),
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
            onPress={countIconPressed('comment')}
            name="comment"
            size={24}
            color="#2196f3"
            textStyle={[styles.iconText]}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={countIconPressed('comment')}
            name="sync"
            size={24}
            color="#9c27b0"
            textStyle={[styles.iconText]}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={countIconPressed('comment')}
            name="heart"
            size={24}
            color="#f44336"
            textStyle={[styles.iconText]}
            text={person.counts.comment}
          />
        </View>
      </View>
    </View>
  );
};

export default Person;
