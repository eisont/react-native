/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import type {FC, Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import * as D from '../data';
import {IconText} from '../components';
import {styles} from './Person.style';

export type PersonIconsProps = {
  person: D.IPerson;
  setPerson: Dispatch<SetStateAction<D.IPerson>>;
};

const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
  const commentPressed = useCallback(
    () =>
      setPerson(prev => {
        const {comment} = prev.counts;
        return {...prev, counts: {...prev.counts, comment: comment + 1}};
      }),
    [],
  );
  const retweetPressed = useCallback(
    () =>
      setPerson(prev => {
        const {retweet} = prev.counts;
        return {...prev, counts: {...prev.counts, retweet: retweet + 1}};
      }),
    [],
  );
  const heartPressed = useCallback(
    () =>
      setPerson(prev => {
        const {heart} = prev.counts;
        return {...prev, counts: {...prev.counts, heart: heart + 1}};
      }),
    [],
  );

  return (
    <View style={[styles.countsView]}>
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={commentPressed}
        name="comment"
        size={24}
        color="#2196f3"
        textStyle={[styles.iconText]}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={retweetPressed}
        name="sync"
        size={24}
        color="#9c27b0"
        textStyle={[styles.iconText]}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={heartPressed}
        name="heart"
        size={24}
        color="#f44336"
        textStyle={[styles.iconText]}
        text={person.counts.heart}
      />
    </View>
  );
};

export default PersonIcons;
