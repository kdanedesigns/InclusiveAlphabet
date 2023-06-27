// Import React and the CSSProperties type
import React, { CSSProperties } from 'react';

// Define the Props type for the LetterWrapper component
type Props = {
  letter: string;
  rotation: number;
  flip: boolean;
  mirror: boolean;
  style?: CSSProperties;
};

// Define the LetterWrapper component
const LetterWrapper: React.FC<Props> = ({
  letter,
  rotation,
  flip,
  mirror,
  style,
}) => {
  // Define the transformStyle object to apply rotation, flip, and mirror transformations
  const transformStyle: CSSProperties = {
    transform: `rotate(${rotation}deg) scale(${flip ? -1 : 1}, ${
      mirror ? -1 : 1
    })`,
    display: 'inline-block',
    fontSize: '50px',
    lineHeight: 1,
  };

  // Define the wrapperStyle object for the outer wrapper div
  const wrapperStyle: CSSProperties = {
    display: 'inline-block',
    margin: '10px',
  };

  // Render the LetterWrapper component
  return (
    // Apply the combined wrapperStyle and provided style (if any) to the outer wrapper div
    <div style={{ ...wrapperStyle, ...style }}>
      {/* Apply the transformStyle to the inner div and render the letter */}
      <div style={{ ...transformStyle, lineHeight: 1 }}>{letter}</div>
    </div>
  );
};

// Export the LetterWrapper component
export default LetterWrapper;
