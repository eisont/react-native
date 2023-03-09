import React, {Component} from 'react';
import {Text} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();
export default class ClassCompontent extends Component {
  render() {
    return <Text>{JSON.stringify(person, null, 2)}</Text>;
  }
}
