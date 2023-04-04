import React, {useCallback, useState} from 'react';
import {Appearance, SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/screens/MainNavigator';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import {ToggleThemeProvider} from './src/contexts';

const App = () => {
  // 다크모드 & 기본모드 인지 확인코드
  const colorScheme = Appearance.getColorScheme();

  const [, setTheme] = useState(
    colorScheme === 'dark' ? MD3DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(th => (th.dark ? DefaultTheme : MD3DarkTheme)),
    [],
  );

  return (
    <PaperProvider theme={MD3DarkTheme}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaView style={[styles.safeAreaView]}>
          <MainNavigator />
        </SafeAreaView>
      </ToggleThemeProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});

export default App;
