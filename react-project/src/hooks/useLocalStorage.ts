import { useCallback, useState } from 'react';

function getValue(key: string) {
  const value = JSON.parse(localStorage.getItem(key) || '');

  if (value) {
    return value;
  }

  return '';
}

export const useLocalStorage = (
  key: string
): [
  string,
  {
    setItem: (newToken: string) => void;
    removeItem: () => void;
  }
] => {
  const [token, setToken] = useState<string>(() => getValue(key));

  const setItem = useCallback(
    (newToken: string) => {
      localStorage.setItem(key, newToken);
      setToken(newToken);
    },
    [key]
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
    setToken('');
  }, [key]);

  return [
    token,
    {
      setItem,
      removeItem,
    },
  ];
};
