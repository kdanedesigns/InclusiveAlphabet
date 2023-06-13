// components/ImageManipulator.tsx
import React, { useState, useMemo, Key, CSSProperties } from 'react';
import ImageWrapper from './ImageWrapper';
import ImageDuplicate from './ImageDuplicate';

type Props = {
  imageUrl: string;
};

const ImageManipulator: React.FC<Props> = ({ imageUrl }) => {
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState(false);
  const [mirror, setMirror] = useState(false);
  const [renderKey, setRenderKey] = useState<Key>(Math.random());
  const variations = [
    { rotation: 0, flip: false, mirror: false },
    { rotation: 90, flip: false, mirror: false },
    { rotation: 180, flip: false, mirror: false },
    { rotation: 270, flip: false, mirror: false },
    { rotation: 0, flip: true, mirror: false },
    { rotation: 0, flip: false, mirror: true },
    { rotation: 90, flip: true, mirror: false },
    { rotation: 270, flip: true, mirror: false },
  ];

  const handleRotateClick = () => {
    setRotation(rotation + 90);
    setRenderKey(Math.random());
  };

  const handleFlipClick = () => {
    setFlip(!flip);
    setRenderKey(Math.random());
  };

  const handleMirrorClick = () => {
    setMirror(!mirror);
    setRenderKey(Math.random());
  };

  const transformStyle = useMemo<CSSProperties>(() => {
    const scaleX = flip ? -1 : 1;
    const scaleY = mirror ? -1 : 1;
    return {
      transform: `rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`,
      // position: 'absolute',
      zIndex: -1,
    };
  }, [rotation, flip, mirror]);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        <div key={renderKey} style={transformStyle}>
          <ImageWrapper
            src={imageUrl}
            alt="Manipulated"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleRotateClick}>Rotate</button>
        <button onClick={handleFlipClick}>Flip</button>
        <button onClick={handleMirrorClick}>Mirror</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {variations.map((variation, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              marginLeft: index > 0 ? '1rem' : '',
            }}
          >
            <p>{index}</p>
            <ImageDuplicate
              src={imageUrl}
              alt={`Variation ${index}`}
              width={200}
              height={200}
              {...variation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManipulator;
