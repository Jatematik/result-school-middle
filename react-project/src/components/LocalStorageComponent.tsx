import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const LocalStorageComponent: React.FC = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>Твой токен: {token}</p>
      <div>
        <button onClick={() => setItem('new-token')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  );
};
