import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CustomForm({ onSubmit }) {

  const navigate = useNavigate();
  
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [budget, setBudget] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/homes-available?location=${location}&bedrooms=${bedrooms}&budget=${budget}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location"
          value={location}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value="Haringey">Haringey</MenuItem>
          <MenuItem value="Hackney">Hackney</MenuItem>
          <MenuItem value="Southwark">Southwark</MenuItem>
          <MenuItem value="Wandsworth">Wandsworth</MenuItem>
          <MenuItem value="Lambeth">Lambeth</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{ marginTop: 24 }}>
        <InputLabel id="bedrooms-label">Bedrooms</InputLabel>
        <Select
          labelId="bedrooms-label"
          id="bedrooms"
          value={bedrooms}
          label="Bedrooms"
          onChange={handleBedroomsChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{ marginTop: 24 }}>
        <InputLabel id="budget-label">Budget per bedroom</InputLabel>
        <Select
          labelId="budget-label"
          id="budget"
          value={budget}
          label="Budget per bedroom"
          onChange={handleBudgetChange}
        >
          {Array.from({ length: 20 }, (_, index) => (
            <MenuItem key={index} value={(index + 10) * 50}>
              {(index + 10) * 50}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: 24 }}>
        Submit
      </Button>
    </form>
  );
}

export default CustomForm;
