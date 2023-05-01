import { useCallback, useEffect, useState } from 'react';
import { PostType } from '../types';

interface Options<T> extends RequestInit {
  params?: T;
}

export interface FetchTypes {
  data: PostType[];
  isLoading: boolean;
  error: string | unknown;
  refetch: <T>(options?: Options<T>) => void;
}

export const useFetch = (url: string): FetchTypes => {
  const [data, setData] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | unknown>('');

  const refetch = useCallback(
    <T>(options?: Options<T>) => {
      let query;

      if (options?.params) {
        const queryArray = [];

        for (const key in options.params) {
          if (Object.prototype.hasOwnProperty.call(options.params, key)) {
            queryArray.push([key, String(options.params[key])]);
          }
        }

        query = new URLSearchParams([...queryArray]);
      }

      setIsLoading(true);

      fetch(`${url}?${query}`, {
        ...options,
      })
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [url]
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, isLoading, error, refetch };
};
