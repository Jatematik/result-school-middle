import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

export const ViewportSizeComponent: React.FC = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
