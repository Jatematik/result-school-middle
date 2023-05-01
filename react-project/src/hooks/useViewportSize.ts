import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

const defaultClientHeight = document.documentElement.clientHeight;
const defaultClientWidth = document.documentElement.clientWidth;

export const useViewportSize = () => {
  const [width, setWidth] = useState(defaultClientWidth);
  const [height, setHeight] = useState(defaultClientHeight);

  useWindowEvent('resize', () => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  });

  return {
    width,
    height,
  };
};
