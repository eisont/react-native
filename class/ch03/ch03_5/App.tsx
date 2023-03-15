import React from 'react';
import * as D from './src/data';
import Person from './src/copy/Person';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import color from 'color';

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, _) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {
    borderWidth: 1,
    borderColor: color('#9e9e9e').lighten(0.3).string(),
  },
});

export default App;
