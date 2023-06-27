// Import necessary libraries and components
import React, { useState } from 'react';
import LetterWrapper from './LetterWrapper';

// Define interfaces for Variation and Alphabet types
interface Variation {
  rotation: number;
  flip: boolean;
  mirror: boolean;
}

type Alphabet = Record<string, Variation>;

// Define an async function to save the alphabet data to the database
const saveAlphabetToDatabase = async (alphabetData: any, name: string) => {
  console.log('Sending alphabetData:', alphabetData);
  try {
    // Make a POST request to the API to save the alphabet
    const response = await fetch('/api/save-alphabet', {
      method: 'POST',
      body: JSON.stringify({
        alphabetData: JSON.stringify(alphabetData),
        name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Throw an error if the response is not ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error saving alphabet: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error saving alphabet to database', error);
  }
};

// Define CustomAlphabet as a functional component with a prop named 'variations'
const CustomAlphabet: React.FC<{
  variations: Record<
    string,
    { rotation: number; flip: boolean; mirror: boolean }
  >;
}> = ({ variations }) => {
  // Define a CSS style object for the letter wrapper elements
  const letterWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    marginLeft: '20px',
    width: '10%',
  };

  // Declare a state variable for the alphabet name
  const [alphabetName, setAlphabetName] = useState('');
  // Define a function to handle changes in the input field for the alphabet name
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlphabetName(event.target.value);
  };

  // Define an async function to handle the click event on the "Save Alphabet" button
  const handleSaveClick = async () => {
    // Show an alert if the alphabet name is empty
    if (!alphabetName) {
      alert('Please enter a name for your custom alphabet');
      return;
    }

    // Try to save the alphabet data to the database, show appropriate alerts for success or failure
    try {
      await saveAlphabetToDatabase(variations, alphabetName);
      alert('Custom alphabet saved successfully');
    } catch (error) {
      alert('Error saving custom alphabet');
    }
  };

  // Render the CustomAlphabet component with an input field for the name, LetterWrapper components, and a "Save Alphabet" button
  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <label htmlFor="name">Enter a name for your custom alphabet:</label>
        <input
          type="text"
          id="name"
          value={alphabetName}
          onChange={handleNameChange}
        />
      </div>
      {Object.entries(variations).map(([letter, variation]) => (
        <LetterWrapper
          key={letter}
          letter={letter}
          rotation={variation.rotation}
          flip={variation.flip}
          mirror={variation.mirror}
          style={letterWrapperStyle}
        />
      ))}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSaveClick}>Save Alphabet</button>
      </div>
    </div>
  );
};

// Export the CustomAlphabet component
export default CustomAlphabet;
