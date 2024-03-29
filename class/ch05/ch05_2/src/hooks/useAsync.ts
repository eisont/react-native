/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';

export const useAsync = <T>(
  asyncCallback: () => Promise<T>,
  deps: any[] = [],
): [Error | null, () => void] => {
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    asyncCallback().catch(setError);
  }, deps);
  const resetError = useCallback(() => setError(_ => null), []);

  return [error, resetError];
};
