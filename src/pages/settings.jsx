import React from 'react'
import LabelBottomNavigation from '../components/Nav.jsx'
import { Stack, Card, CardContent } from '@mui/material'


export default function Settings() {
  return (
    <div>
      <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '24px',
          marginRight: '24px',
          marginBottom:'100px'
        }}>>
        <Stack>
          <h1>Settings</h1>
          <Card sx={{width:"100%"}}>
            <CardContent>
              <div>
                <a href="/find-a-home">Find another home</a>
              </div>
            </CardContent>
          </Card>
        </Stack>
      </div>
      <LabelBottomNavigation />
    </div>
  )
}

