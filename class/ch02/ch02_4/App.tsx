import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const onPress = () => Alert.alert('home pressed.', 'message');

const App = () => {
  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>
          {/* 잠시 사라지는 효과 */}
          TouchableOpacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>
          {/* 하이라이트 효과 */}
          TouchableHighlight
        </Text>
      </TouchableHighlight>
      <Text onPress={onPress}>Press me</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
};

export default App;
