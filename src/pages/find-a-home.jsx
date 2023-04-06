import * as React from 'react';
import LabelBottomNavigation from '../components/Nav.jsx'
import Map from '../components/findahome/map'
import CustomForm from '../components/findahome/console'
import Stack from '@mui/material/Stack'

export default function FindAHome() {
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
          <h1>Find a home</h1>
          <CustomForm />
        </Stack>
      </div>
      <LabelBottomNavigation />
    </div>
  )
}
