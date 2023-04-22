// Import React and required hooks
import React, { useState } from 'react';
// Import the LetterWrapper component
import LetterWrapper from './LetterWrapper';

// Define the Props type for the LetterManipulator component
type Props = {
  letter: string;
  chosenVariations: {
    [key: string]: { rotation: number; flip: boolean; mirror: boolean };
  };
  setChosenVariations: React.Dispatch<
    React.SetStateAction<{
      [key: string]: { rotation: number; flip: boolean; mirror: boolean };
    }>
  >;
};

// Define the LetterManipulator component
const LetterManipulator: React.FC<Props> = ({
  letter,
  chosenVariations,
  setChosenVariations,
}) => {
  // Declare state variables for rotation, flip, mirror, and selectedVariation
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState(false);
  const [mirror, setMirror] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<number | null>(
    null
  );

  // Define the default variations
  const defaultVariations = { rotation: 0, flip: false, mirror: false };

  // Handle click events on variation cards
  const handleVariationClick = (
    index: number,
    rotation: number,
    flip: boolean,
    mirror: boolean
  ) => {
    // Log the selected variation
    console.log(
      'selected rotation: ' + rotation + ' flip: ' + flip + ' mirror: ' + mirror
    );
    // Set the selected variation index
    setSelectedVariation(index);
    // Update the chosenVariations state with the new variation
    setChosenVariations((prevVariations) => ({
      ...prevVariations,
      [letter]: { rotation, flip, mirror },
    }));
  };

  // Handle click events on the Rotate button
  const handleRotateClick = () => {
    setRotation(rotation + 90);
  };

  // Handle click events on the Flip button
  const handleFlipClick = () => {
    setFlip(!flip);
  };

  // Handle click events on the Mirror button
  const handleMirrorClick = () => {
    setMirror(!mirror);
  };

  // Define styles for variation cards
  const cardStyle: React.CSSProperties = {
    display: 'inline-block',
    margin: '10px',
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
    cursor: 'pointer',
  };

  // Define styles for the selected variation card
  const selectedCardStyle: React.CSSProperties = {
    ...cardStyle,
    borderColor: '#001244',
    borderWidth: '4px',
    borderStyle: 'solid',
  };

  // Define the available letter variations
  const letterVariations = [
    { rotation: 0, flip: false, mirror: false },
    { rotation: 90, flip: false, mirror: false },
    { rotation: 180, flip: false, mirror: false },
    { rotation: 270, flip: false, mirror: false },
    { rotation: 0, flip: true, mirror: false },
    { rotation: 0, flip: false, mirror: true },
    { rotation: 90, flip: true, mirror: false },
    { rotation: 270, flip: true, mirror: false },
  ];

  // Render the LetterManipulator component
  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Render the LetterWrapper component with the current rotation, flip, and mirror values */}
        <LetterWrapper
          letter={letter}
          rotation={rotation}
          flip={flip}
          mirror={mirror}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Render Rotate, Flip, and Mirror buttons */}
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleRotateClick}
        >
          Rotate
        </button>
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleFlipClick}
        >
          Flip
        </button>
        <button
          style={{
            backgroundColor: 'rgba(105,10,230,1)',
            borderRadius: '10px',
            padding: '5px',
          }}
          onClick={handleMirrorClick}
        >
          Mirror
        </button>
      </div>

      <div style={{ width: '600px' }}>
        {/* Render a card for each letter variation */}
        {letterVariations.map((variation, index) => (
          <div
            key={index}
            onClick={() =>
              handleVariationClick(
                index,
                variation.rotation,
                variation.flip,
                variation.mirror
              )
            }
            style={index === selectedVariation ? selectedCardStyle : cardStyle}
          >
            <p>{index}</p>
            {/* Render the LetterWrapper component with the current variation values */}
            <LetterWrapper
              letter={letter}
              rotation={variation.rotation}
              flip={variation.flip}
              mirror={variation.mirror}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the LetterManipulator component
export default LetterManipulator;
