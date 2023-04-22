// components/ImageDuplicate.tsx
import React, { CSSProperties } from 'react';
import ImageWrapper from './ImageWrapper';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  rotation?: number;
  flip?: boolean;
  mirror?: boolean;
  style?: CSSProperties;
};

const ImageDuplicate: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  rotation = 0,
  flip = false,
  mirror = false,
  style,
}) => {
  const scaleX = flip ? -1 : 1;
  const scaleY = mirror ? -1 : 1;

  const transformStyle: CSSProperties = {
    transform: `rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`,
    ...style,
  };

  return (
    <ImageWrapper
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={transformStyle}
    />
  );
};

export default ImageDuplicate;
