import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function LinearLink() {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button>Maintain</Button>
      <Button>Improve</Button>
    </ButtonGroup>
    
  )
}