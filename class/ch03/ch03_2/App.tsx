import React from 'react';
import {
  Dimensions, // 현재 실행된 폰의 크기
  Platform, // 현재 실행된 폰이 android, ios인지
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('window'); // 이 두 값은 폰을 가로로 회전하더라도 (landscape 모드) 변하지 않습니다.

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>os: {Platform.OS}</Text>
      <Text style={[styles.text, {color: 'yellow'}]}>width: {width} px</Text>
      <Text style={[styles.text, {color: 'orange'}]}>height: {height} px</Text>

      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // height: height 이렇게 속성 이름과 값을 담은 변수 이름이 똑같을 때는 값을 담은 변수 부분을 생략할 수 있다.
  // height: 100% === flex: 1

  // 안드로이드에서 SafeAreaView는 단순히 View로 동작하지만 IOS에서 SafeAreaView는 View가 아니기 때문에 서로 다른 화면이 나올 때가 있습니다.
  // iOS에서 SafeAreaView는 비록 'View'자가 들어간 컴포넌트지만 padding 스타일 속성은 동작하지 않습니다.
  // 안드로이드와 iOS가 동일한 화면이 나오게 하기 위해서는 Platform.select를 사용해서 android와 ios를 구분지어서 설정하면 됩니다.
  safeAreaView: {
    backgroundColor: MD2Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 50,
    marginTop: 20,
    // marginTop, marginBottom, marginLeft, marginRight 모두 동일하면 margin
    // marginVertical === marginTop와 marginBottom가 동일할 때
    // marginHorizontal === marginLeft와 marginRight가 동일할 때

    // paddingTop, paddingBottom, paddingLeft, paddingRight 모두 동일하면 padding
    // paddingVertical === paddingTop와 paddingBottom가 동일할 때
    // paddintHorizontal === paddingLeft와 paddingRight가 동일할 때
  },
  box: {
    width: '70%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}),
  },
  border: {borderWidth: 10, borderColor: MD2Colors.lime500},
});

export default App;
