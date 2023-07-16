import React, { useState } from 'react';
import AWS from 'aws-sdk';
import Nav from '../components/Nav';


const LoginPage: React.FC = () => {
  // Create an instance of the AWS DynamoDB client
  const dynamodbClient = new AWS.DynamoDB();

  // State variables for the login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Call the AWS SDK method to save the user to DynamoDB
      await dynamodbClient.putItem({
        TableName: 'for_users', // Replace with your DynamoDB table name
        Item: {
          username: { S: username },
          password: { S: password },
        },
      }).promise();

      console.log('User saved to DynamoDB');
    } catch (error) {
      console.error('Error saving user to DynamoDB:', error);
    }
  };

  const handleSaveClick = async () => {
    alert('Open page to create new user here');
    console.log('new user here');
  };

  return (
    <div>
      <Nav></Nav>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h1>New User?</h1>
      <button onClick={handleSaveClick}>Create a New Account</button>
    </div>
  );
};

export default LoginPage;
