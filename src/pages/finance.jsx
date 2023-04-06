import * as React from 'react';
import LabelBottomNavigation from '../components/Nav.jsx'
import FinanceElement from '../components/financeElement.jsx'
import Stack from '@mui/material/Stack'
import PaymentsGrid from '../components/paymentsGrid.jsx'
import PotsGrid from '../components/potsGrid.jsx'

function Finance() {
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
            <h1>My finances</h1>
           <FinanceElement/>
          <h3>Pots</h3>
          <PotsGrid />
          <h3>Payments</h3>
          <PaymentsGrid />
        </Stack>
      </div>
      <div>
        <LabelBottomNavigation />
      </div>
    </div>
	);
}

export default Finance;
