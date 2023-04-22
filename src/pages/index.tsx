// Import necessary dependencies
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import LetterManipulator from '@/components/LetterManipulator';
import CustomAlphabet from '@/components/CustomAlphabet';
import AlphabetsList from '@/components/AlphabetsList';
import AlphabetsContainer from '@/components/AlphabetsContainer';

// Main functional component of the application
export default function Home() {
  // State for the index of the current letter being displayed
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // Alphabet as a string
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // State for the chosen variations of the letters in the alphabet
  const [chosenVariations, setChosenVariations] = useState(
    alphabet.split('').reduce<{ [key: string]: any }>((acc, letter) => {
      acc[letter] = { rotation: 0, flip: false, mirror: false };
      return acc;
    }, {})
  );

  // Handler function for switching to the next letter
  const handleNextLetter = () => {
    if (currentLetterIndex < alphabet.length - 1) {
      setCurrentLetterIndex((prevIndex) =>
        prevIndex < alphabet.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  // Handler function for switching to the previous letter
  const handlePreviousLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  // CSS styling for the button container
  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'relative',
    padding: '40px',
    width: '50px',
  };

  return (
    <>
      {/* Set the page head, including title, meta tags, and favicon */}
      <Head>
        <title>DysKeys</title>
        <meta name="description" content="Image Rotation testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <h1 style={{ marginBottom: '20px' }}>Dyslexia Fontification</h1> */}
        <div className={styles.center}>
          {/* <ImageManipulator imageUrl={aaa} /> */}
          {/* <AlphabetCreator /> */}
          {/* <LetterManipulator letter={'h'} /> */}

          {/* <CustomAlphabet variations={chosenVariations} /> */}
          {/* Render the LetterManipulator component for the current letter */}
          <LetterManipulator
            letter={alphabet[currentLetterIndex]}
            chosenVariations={chosenVariations}
            setChosenVariations={setChosenVariations}
          />
          <div style={buttonContainerStyle}>
            <button
              style={{
                backgroundColor: 'rgba(81,4,122,1)',
                borderRadius: '10px',
                width: '60px',
                boxShadow:
                  '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
              }}
              onClick={handlePreviousLetter}
            >
              Previous Letter
            </button>
            <button
              style={{
                backgroundColor: 'rgba(81,4,122,1)',
                width: '60px',
                borderRadius: '10px',
                boxShadow:
                  '0 2px 3px rgba(105,10,230,1), 0 1px 2px rgba(0,0,0,0.24)',
              }}
              onClick={handleNextLetter}
            >
              Next Letter
            </button>
          </div>
          {/* Render the CustomAlphabet component with the chosen variations */}
          <CustomAlphabet variations={chosenVariations} />
          {/* Render the AlphabetsContainer component */}
          <AlphabetsContainer />
        </div>
      </main>
    </>
  );
}
