// Importing Next.js request and response types for API routes
import { NextApiRequest, NextApiResponse } from 'next';

// Importing a function to create a database connection
import { createConnection } from '../../lib/db';

// Declaring an asynchronous function to handle requests to fetch all saved alphabets
async function handler(req: NextApiRequest, res: NextApiResponse) {
  // If the incoming request method is GET, try to fetch all saved alphabets from the database
  if (req.method === 'GET') {
    try {
      // Create a database connection
      const connection = await createConnection();

      // Execute an SQL SELECT statement to fetch all alphabet data from the database
      const [rows] = await connection.query(
        'SELECT alphabet_data FROM alphabets'
      );

      // Close the database connection
      connection.end();

      // Return a success response with the fetched alphabet data
      res.status(200).json({ alphabets: rows });
    } catch (error) {
      // If an error occurs while fetching the alphabets, log the error to the console and return an error response
      console.error('Error fetching alphabets:', error);
      res
        .status(500)
        .json({ message: 'An error occurred while fetching the alphabets' });
    }
  } else {
    // If the incoming request method is not GET, return an error response
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Export the handler function as the default export of this module
export default handler;
