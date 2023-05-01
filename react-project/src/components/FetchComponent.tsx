import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { PostType } from '../types';

export const FetchComponent: React.FC<FetchComponentProps> = () => {
  const { data, isLoading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map((item: PostType) => <div key={item.id}>{item.title}</div>)}
    </>
  );
};

interface FetchComponentProps {}
