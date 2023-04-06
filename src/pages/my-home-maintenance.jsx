import React from 'react';
import LabelBottomNavigation from '../components/Nav.jsx'
import LinearLink from '../components/linearLink.jsx'
import Stack from '@mui/material/Stack'
import PaymentsCard from '../components/paymentsCard.jsx'
import Button from '@mui/material/Button';
import TransactionHistory from '../components/transactionHistory.jsx'

function MyHome() {
  return (
    <div>
    <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '24px',
          marginRight: '24px',
          marginBottom:'100px'
        }}>
      <Stack sx={{width:'100%'}}>
     <h1>My home</h1>
      <LinearLink />
      <PaymentsCard />
      <Button variant="outlined">Claim expense</Button>
      <TransactionHistory />
      </Stack>
    </div>
     <LabelBottomNavigation />
    </div>
  );
}

export default MyHome;