import React from 'react';
import {Text} from 'react-native';

const App = () => {
  const textElement = React.createElement(Text, null, 'Hello World!!!');

  return textElement;
};

export default App;
