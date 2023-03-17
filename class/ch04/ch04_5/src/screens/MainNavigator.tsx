/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper'; // yarn add react-native-safe-area-context 추가로 다운
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Fetch from './Fetch';
import Interval from './Interval';
import LifeCycle from './LifeCycle';
import Timer from './Timer';

const MainNavigator = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'life', title: 'LifeCycle', focusedIcon: 'page-layout-header-footer'},
    {key: 'timer', title: 'Timer', focusedIcon: 'clock-time-four'},
    {key: 'interval', title: 'Interval', focusedIcon: 'timeline'},
    {key: 'fetch', title: 'fetch', focusedIcon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    life: LifeCycle,
    timer: Timer,
    interval: Interval,
    fetch: Fetch,
  });

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
