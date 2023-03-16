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

const PersonUsingValueState: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);
  // initialPerson.count.comment, retweet, heart
  const [comment, setComment] = useState<number>(0);
  const [retweet, setRetweet] = useState<number>(0);
  const [heart, setHeart] = useState<number>(0);

  const commentPressed = useCallback(() => setComment(prev => prev + 1), []);
  const retweetPressed = useCallback(() => setRetweet(prev => prev + 1), []);
  const heartPressed = useCallback(() => setHeart(prev => prev + 1), []);

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={initialPerson.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>

      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{initialPerson.name} name</Text>
        <Text style={[styles.email]}>{initialPerson.email}email</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(initialPerson.createdDate).startOf('day').fromNow()}
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
          {initialPerson.comments}
          comments
        </Text>
        <Image style={[styles.image]} source={{uri: initialPerson.image}} />
        <View style={[styles.countsView]}>
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={commentPressed}
            name="comment"
            size={24}
            color="#2196f3"
            textStyle={[styles.iconText]}
            text={comment}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={retweetPressed}
            name="sync"
            size={24}
            color="#9c27b0"
            textStyle={[styles.iconText]}
            text={retweet}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={heartPressed}
            name="heart"
            size={24}
            color="#f44336"
            textStyle={[styles.iconText]}
            text={heart}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonUsingValueState;
