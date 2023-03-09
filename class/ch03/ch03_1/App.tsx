import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {MD2Colors} from 'react-native-paper'; // Colors가 없어져 MD2Colors로 대체합니다.
import Color from 'color';

console.log(MD2Colors.blue500);
console.log(Color(MD2Colors.blue500).alpha(0.5).lighten(0.5).string());
const App = () => {
  return (
    // 밑에 코드는 인라인 스타일
    // 컴포넌트는 필요에 따라 리액트 네이티브에 의해 재렌더링됩니다. 재렌더링은 상황에 따라 반복해서 발생합니다. 이런 상황을 고려할 때 인라인 스타일 스타일 방식은 자바스크립트 엔진 쪽 스레드에서 UI 스레드 쪽으로 브리지를 경유하여 옮겨가므로 내용이 컴포넌트 로직에 의해 바뀌지 않을 때는 앱의 디스플래이 속도가 떨어집니다. 이와는 달리 StyleSheet.create로 생성된 스타일 객체는 UI 스레드 쪽에 캐시되므로 앱 전체의 디스플레이 속도가 빨라집니다.
    // 내용이 변하지 않는 스타일(즉, 정적 스타일) 객체는 StyleSheet.create 방식으로 구현하는 것이 효과적이고
    // 컴포넌트 구현 로직에 따라 동적으로 변하는 스타일 객체는 인라인 스타일 방식으로 구현하는 것이 일반적이다.
    // <SafeAreaView style={[styles.safeAreaView, {backgroundColor: 'blue'}]}>
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>
        Hello StyleSheet world!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Color(MD2Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
});

export default App;
