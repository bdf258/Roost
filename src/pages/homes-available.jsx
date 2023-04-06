import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

import GridHomeCard from '../components/findahome/gridHomeCard.jsx';
import HomeCard from '../components/findahome/homeCard.jsx';

export default function HomesAvailable() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationParam = searchParams.get('location');
  const bedroomsParam = searchParams.get('bedrooms');
  const budgetParam = searchParams.get('budget');

  // Use the data in the component's rendering
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
        <Stack>
          <h1>Homes available</h1>
          <p>Homes available in {locationParam} with {bedroomsParam} bedrooms for a budget of £{budgetParam}.</p>
          <div>
            <GridHomeCard rooms={bedroomsParam} price={budgetParam} place={locationParam}/>
            <p>That's all the results! Try expanding your search critera.</p>
          </div>
        </Stack>
      </div>
    </div>
  );
}

