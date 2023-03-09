import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import color from 'color';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 40, borderBottomLeftRadius: 40},
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // height: height 이렇게 속성이름과 값을 담은 변수 이름이 똑같은 때는 값을 담은 변수 부분을 생략할 수 있는 단축 구문을 제공합니다.
  // safeAreaView: {backgroundColor: MD2Colors.blue500, height},
  // height: '100%' 는 height: Dimensions.get('window').height와 같은 뜻입니다.
  // safeAreaView: {backgroundColor: MD2Colors.blue500, height: '100%'},
  // flex 스타일 속성에 1이란 값을 설정하면 height: '100%' 효과가 발생합니다. 만일 0.5를 설정하면 height: '50%' 효과가 발생합니다.
  safeAreaView: {
    backgroundColor: MD2Colors.blue500,
    flex: 1,
    margin: '10%',
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  text: {
    marginBottom: 10,
    marginLeft: 30,
    fontSize: 20,
    color: color(MD2Colors.blue500).lighten(0.9).string(),
  },
  box: {
    height: 100,
    backgroundColor: MD2Colors.lime500,
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}),
  },
  border: {borderWidth: 10, borderColor: color('black').alpha(0.3).string()},
});

export default App;
