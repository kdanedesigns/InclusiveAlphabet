import React, { useState } from 'react';
import CustomAlphabet from './CustomAlphabet';
import AlphabetDisplay from './AlphabetDisplay';

// Define types for alphabet variations and component props
type AlphabetVariations = Record<
  string,
  { rotation: number; flip: boolean; mirror: boolean }
>;

type Props = {
  onLoadAlphabets: () => Promise<AlphabetVariations[]>;
};

// Define AlphabetsList as a functional component with Props as its props type
const AlphabetsList: React.FC<Props> = ({ onLoadAlphabets }) => {
  // Declare a state variable 'alphabets' with an initial value of an empty array
  const [alphabets, setAlphabets] = useState<AlphabetVariations[]>([]);

  // Define an async function to handle the click event on the "Get Alphabets" button
  const handleGetClick = async () => {
    // Call the onLoadAlphabets function passed as a prop and await the result
    const loadedAlphabets = await onLoadAlphabets();
    console.log('loadedAlphabets:', loadedAlphabets);
    // Update the 'alphabets' state with the loaded data
    setAlphabets(loadedAlphabets);
  };

  // If the 'alphabets' array is empty, render the "Get Alphabets" button and a "Loading..." message
  if (alphabets.length === 0) {
    return (
      <div>
        <button onClick={handleGetClick}>Get Alphabets</button>
        <div>Loading...</div>
      </div>
    );
  }

  // If the 'alphabets' array is not empty, render the "Get Alphabets" button and a list of alphabet displays
  return (
    <div>
      <button onClick={handleGetClick}>Get Alphabets</button>
      {alphabets.map((alphabet, index) => (
        <div key={index}>
          <h6>Alphabet {index + 1}</h6>
          {/* Uncomment the following line to use the CustomAlphabet component instead of AlphabetDisplay */}
          {/* <CustomAlphabet variations={alphabet} /> */}
          <AlphabetDisplay variations={alphabet} />
        </div>
      ))}
    </div>
  );
};

// Export the AlphabetsList component
export default AlphabetsList;
