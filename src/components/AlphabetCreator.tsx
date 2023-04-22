// components/AlphabetCreator.tsx
import React, { useState } from 'react';
import LetterManipulator from './LetterManipulator';
import CustomAlphabet from './CustomAlphabet';

const AlphabetCreator: React.FC = () => {
  const defaultVariations = { rotation: 0, flip: false, mirror: false };
  const [chosenVariations, setChosenVariations] = useState(
    'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .reduce<{ [key: string]: typeof defaultVariations }>((acc, letter) => {
        acc[letter] = defaultVariations;
        return acc;
      }, {})
  );

  return (
    <div>
      <LetterManipulator
        letter="b"
        chosenVariations={chosenVariations}
        setChosenVariations={setChosenVariations}
      />
      <CustomAlphabet variations={chosenVariations} />
    </div>
  );
};

export default AlphabetCreator;
