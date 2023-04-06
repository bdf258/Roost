import React from 'react';
import { Card, CardContent, Typography, Stack, Link } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function HomeCard({URL, bedrooms, address, budget}) {
  return (
    <Card sx={{marginTop:"12px"}}>
      <CardContent>
        <Typography variant="h5">
          {'£' + budget}
        </Typography>
        <Typography variant="h5">
          {<Link href={URL} target="_blank">{address}</Link>}
        </Typography>
        <Stack direction="row" sx={{ justifyContent:"space-between"}}>
          <Stack direction="row" spacing={1} sx={{alignItems:"center"}}>
          <Typography variant="h6">
          {bedrooms}
          </Typography>
          <BedIcon />
        </Stack>
        <OpenInNewIcon sx={{color:"#AAAAAA"}}/>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default HomeCard;
