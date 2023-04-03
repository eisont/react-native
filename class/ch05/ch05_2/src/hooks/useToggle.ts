/* eslint-disable prettier/prettier */
import {useCallback, useState} from 'react';

export const useToggle = (
  initialValue: boolean = false,
  deps: any[] = [],
): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue(prev => !prev), deps);
  return [value, toggleValue];
};
