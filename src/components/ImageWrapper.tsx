// components/ImageWrapper.tsx
import React, { CSSProperties, useRef, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: CSSProperties;
};

const ImageWrapper: React.FC<Props> = ({ src, alt, width, height, style }) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.backgroundImage = `url(${src})`;
    }
  }, [src]);

  return (
    <div
      ref={imgRef}
      style={{
        width,
        height,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
      role="img"
      aria-label={alt}
    >
      <div style={{ visibility: 'hidden' }}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
};

export default ImageWrapper;
