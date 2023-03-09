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
      {/*
      Button이 가지는 한가지 문제점은 디자인에 융통성이 없다는 것,
      Button은 전혀 시각 효과가 없다는 것이 터처블 컴포넌트와의 차이 ]
      */}
      <Button title="Home" onPress={onPress} />
      {/* Button의 디자인 융통성을 개선하고자해서 나온 Touchable~코어컴포넌트 */}
      {/* 클릭 했을 때 투명도 효과 */}
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      {/* 클릭 했을 때 하이라이트 효과 */}
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      {/* Text 태그에도 클릭 효과를 줄 수 있다. */}
      <Text onPress={onPress}>Text Event</Text>
      {/*
        1. defaltValue 속성에 초깃값을 설정할 수 있다.
        2. 입력된 텍스트는 value 속성값으로 얻을 수 있다.
        3. 텍스트가 입력될 때 onChaneText 이벤트 처리기를 실행된다.
        4. placeholder 속성을 사용하여 어떤 값을 설정해야 하는지 문자열로 출력할 수 있다.
        5. editable 속성값에 false를 설정하면 입력을 못하게(disable) 할 수 있다.
        6. keyboardType 속성에 'default', 'numeric', 'email-address' 등의 값을 설정할 수 있다.
        7. 포커스를 가지게 하는 focus 메서드와 포커스를 잃게 하는 blue 메서드가 있다.
        8. 텍스트를 입력할 수 있는 상태(포커스를 가진 상태)가 되면 onFocus 이벤트를 호출하고 텍스트를 입력할 수 없는 상태(포커스를 잃은 상태)가 되면 onBlur 이벤트가 호출한다.
        9. 텍스트 입력이 모두 끝나면 onEndEditing 이벤트를 호출한다.
        10. 자식요소를 가지지 못한다.
      */}
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
