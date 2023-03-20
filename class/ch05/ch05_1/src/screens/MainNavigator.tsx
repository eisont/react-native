/* eslint-disable prettier/prettier */
import React, {useMemo, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './Home';

const MainNavigator = () => {
  const [index, setIndex] = useState<number>(0);
  const routes = useMemo(
    () => [{key: 'home', title: 'Home', focusedIcon: 'home'}],
    [],
  );

  const renderScene = BottomNavigation.SceneMap({home: Home});

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default MainNavigator;
