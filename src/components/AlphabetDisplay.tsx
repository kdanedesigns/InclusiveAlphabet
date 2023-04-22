// Import necessary libraries and components
import React from 'react';
import LetterWrapper from './LetterWrapper';

// Define interfaces for Variation and Alphabet types
interface Variation {
  rotation: number;
  flip: boolean;
  mirror: boolean;
}

type Alphabet = Record<string, Variation>;

// Define AlphabetDisplay as a functional component with a prop named 'variations'
const AlphabetDisplay: React.FC<{
  variations: Record<
    string,
    { rotation: number; flip: boolean; mirror: boolean }
  >;
}> = ({ variations }) => {
  // Define styles for the alphabet container and letter wrapper elements
  const containerStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#191619',
  };

  const letterWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    marginLeft: '5px',
    width: '7%',
  };

  // Define a string containing all lowercase English letters
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  // Render a div containing the alphabet display
  return (
    <div style={containerStyle}>
      {/* Iterate through the variations prop, render a LetterWrapper for each entry */}
      {Object.entries(variations).map(([index, variation]) => (
        <LetterWrapper
          key={index}
          letter={letters[parseInt(index)]}
          rotation={variation.rotation}
          flip={variation.flip}
          mirror={variation.mirror}
          style={letterWrapperStyle}
        />
      ))}
    </div>
  );
};

// Export the AlphabetDisplay component
export default AlphabetDisplay;
