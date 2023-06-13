// Importing Next.js request and response types for API routes
import { NextApiRequest, NextApiResponse } from 'next';

// Importing a function to create a database connection
import { createConnection } from '../../lib/db';

// Declaring an asynchronous function to handle saving an alphabet
const saveAlphabet = async (req: NextApiRequest, res: NextApiResponse) => {
  // If the incoming request method is not POST, return an error response
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  // Log the incoming request body to the console
  console.log('Request body:', req.body);

  // Destructure the name and alphabetData properties from the incoming request body
  const { alphabetData, name } = req.body;

  try {
    // Create a database connection
    const connection = await createConnection();

    // Execute an SQL INSERT statement to save the alphabet to the database
    await connection.query(
      'INSERT INTO alphabets (name, alphabet_data) VALUES (?, ?)',
      [name, alphabetData]
    );

    // Close the database connection
    await connection.end();

    // Return a success response with a 201 status code
    res.status(201).json({ message: 'Alphabet saved successfully!' });
  } catch (error) {
    // Log any errors to the console
    console.log('Error while saving alphabet:', error);

    // Return an error response with a 500 status code
    res.status(500).json({ message: 'Error saving alphabet', error });
  }
};

// Export the saveAlphabet function as the default export of this module
export default saveAlphabet;
