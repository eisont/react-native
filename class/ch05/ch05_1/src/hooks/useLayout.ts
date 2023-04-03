/* eslint-disable prettier/prettier */
import {useState, useCallback} from 'react';
import type {LayoutChangeEvent, LayoutRectangle} from 'react-native';

export const useLayout = (): [
  LayoutRectangle,
  (e: LayoutChangeEvent) => void,
] => {
  const [Layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    setLayout(layout);
  }, []);
  return [Layout, onLayout];
};
