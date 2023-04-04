import React from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';

const Home = () => {
  const {dark, colors, fonts} = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.bar, {backgroundColor: colors.primary}]}>
        <Text
          style={[styles.text, {color: colors.onPrimary}, fonts.titleMedium]}>
          Topbar
        </Text>
        <View style={styles.view} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, {color: colors.tertiary}, fonts.default]}>
          Welcome to Context world!
        </Text>
      </View>
      <View style={[styles.bar, {backgroundColor: colors.secondary}]}>
        <Text
          style={[
            styles.text,
            {color: colors.inverseOnSurface},
            fonts.titleMedium,
          ]}>
          Bottmbar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
});

export default Home;
