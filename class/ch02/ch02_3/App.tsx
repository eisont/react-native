import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import * as D from './src/data';
import ArrowComponent from './src/screens/ArrowComponent';
import ClassComponent from './src/screens/ClassComponent';
import Person from './src/screens/Person';

const App = () => {
  const people = D.makeArray(100).map(D.createRandomPerson);
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));

  const person = D.createRandomPerson();

  return (
    <ScrollView>
      <SafeAreaView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
        <Text>====================ClassComponent====================</Text>
        <ClassComponent />
        <Text>====================ArrowComponent====================</Text>
        <ArrowComponent />
        <Text>====================Person====================</Text>
        <Person person={person} />
        <Text>====================children====================</Text>
        <SafeAreaView>{children}</SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
