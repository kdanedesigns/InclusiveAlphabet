import React, { useEffect, useState } from 'react';
import AlphabetsList from './AlphabetsList';

// Define AlphabetsContainer as a functional component
const AlphabetsContainer: React.FC = () => {
  // Declare a state variable 'alphabets' with an initial value of an empty array
  const [alphabets, setAlphabets] = useState([]);

  // Define an async function to load alphabets from the API
  const loadAlphabets = async () => {
    // Fetch the alphabets data from the API
    const response = await fetch('/api/get-alphabets');
    const data = await response.json();

    // Log the fetched data to the console
    console.log('Fetched data:', data);
    console.log(data)

    // Transform the data: convert objects to arrays
    const transformedAlphabets = data.alphabets.map((alphabet: any) => {
      const parsedAlphabetData = alphabet.alphabet_data;

      // Map each object entry to a new object with 'letter' and other properties
      return Object.entries(parsedAlphabetData).map(([key, value]) => ({
        letter: key,
        ...(value as Record<string, unknown>),
      }));
    });

    // Return the transformed alphabets array
    return transformedAlphabets;
  };

  // Use the 'useEffect' hook to fetch the alphabets when the component mounts
  useEffect(() => {
    const fetchAlphabets = async () => {
      const fetchedAlphabets = await loadAlphabets();
      // Update the 'alphabets' state with the fetched data
      setAlphabets(fetchedAlphabets);
    };

    // Call the fetchAlphabets function
    fetchAlphabets();
  }, []); // Pass an empty array to run the effect only on mount

  // Render the AlphabetsList component and pass the loadAlphabets function as a prop
  return <AlphabetsList onLoadAlphabets={loadAlphabets} />;
};

// Export the AlphabetsContainer component
export default AlphabetsContainer;
