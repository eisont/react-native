import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  // const children = [1, 2, 3].map(i => <Text>Hello World! {i}</Text>);

  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hollo World!!! {index}</Text>);

  return <SafeAreaView>{children}</SafeAreaView>;
};

export default App;
