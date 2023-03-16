/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import {Image, Text, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar} from '../components';
import {styles} from './Person.style';
import PersonIcons from './PersonIcons';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const PersonUsingPassingState: FC<PersonProps> = ({person: initialPerson}) => {
  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });

  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar uri={person.avatar} size={50} onPress={avatarPressed} />
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
        <PersonIcons person={person} setPerson={setPerson} />
      </View>
    </View>
  );
};

export default PersonUsingPassingState;
