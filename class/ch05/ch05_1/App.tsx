import React, {useCallback, useState} from 'react';
import {Appearance, SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/screens/MainNavigator';
import {
  Provider as PaperProvider,
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import {ToggleThemeProvider} from './src/contexts';

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  const [, setTheme] = useState(
    colorScheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(th => (th.dark ? DefaultTheme : DarkTheme)),
    [],
  );

  return (
    <PaperProvider theme={DarkTheme}>
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
