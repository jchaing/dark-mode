import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValues) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  useEffect(() => {
    values
      ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode');
  },[values])

  return [values, setValues];
}
