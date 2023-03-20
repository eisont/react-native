/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const Home = () => {
  const theme = useTheme();

  return (
    <View style={[styles.view, {backgroundColor: theme.colors.background}]}>
      <View style={[styles.bar, {backgroundColor: theme.colors.primary}]}>
        <Text
          style={[
            styles.text,
            {color: theme.colors.backdrop},
            theme.fonts.titleMedium,
          ]}>
          Topbar
        </Text>
      </View>
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            {color: theme.colors.tertiary},
            theme.fonts.default,
          ]}>
          Welcome to Context world!
        </Text>
      </View>
      <View style={[styles.bar, {backgroundColor: theme.colors.secondary}]}>
        <Text
          style={[
            styles.text,
            {color: theme.colors.inverseOnSurface},
            theme.fonts.titleMedium,
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
