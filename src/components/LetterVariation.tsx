// components/LetterVariation.tsx
import React, { CSSProperties } from 'react';

type Props = {
  letter: string;
  rotation: number;
  flip: boolean;
  mirror: boolean;
};

const LetterVariation: React.FC<Props> = ({
  letter,
  rotation,
  flip,
  mirror,
}) => {
  const transformStyle: CSSProperties = {
    marginBottom: '20px',
    transform: `rotate(${rotation}deg) scale(${flip ? -1 : 1}, ${
      mirror ? -1 : 1
    })`,
    display: 'inline-block',
    fontSize: '100px',
    margin: '10px',
  };

  return <div style={transformStyle}>{letter}</div>;
};

export default LetterVariation;
