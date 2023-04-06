import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Payments from '@mui/icons-material/Payments'
import Roofing from '@mui/icons-material/Roofing'
import AccountBalance from '@mui/icons-material/AccountBalance'
import Settings from '@mui/icons-material/Settings'
import '../App.css'
import { Link } from 'react-router-dom';


const styles = {
  position: 'fixed',
  bottom: '0',
  width: '100vw',
  color: "#000000",
  backgroundColor: "#FFFDF7",
}

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={styles} sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Finance"
        value="/"
        icon={<Payments />}
        component={Link} to="/"
      />
      <BottomNavigationAction
        label="My home"
        value="/my-home"
        icon={<Roofing />}
        component={Link} to="/my-home"
      />
      <BottomNavigationAction
        label="Community"
        value="community"
        icon={<AccountBalance />}
      />
      <BottomNavigationAction 
        label="Settings" 
        value="settings" 
        icon={<Settings />}
        component={Link} to="/settings"
      />
    </BottomNavigation>
  );
}