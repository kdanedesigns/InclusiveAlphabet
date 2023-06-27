// pages/account.tsx
import React from 'react';
import Nav from '../components/Nav';

interface AccountDetailsProps {
  name: string;
  email: string;
  address: string;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  name,
  email,
  address,
}) => {
  return (
  <div>
    <Nav></Nav>
      <h2>Account Details:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default AccountDetails;