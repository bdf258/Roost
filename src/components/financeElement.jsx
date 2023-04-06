import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FinanceElement() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:'100%' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <CardHeader
          title="£1175"
          subheader="per month"
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack spacing={-3}>
            <h3>Payment details</h3>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Payment</p>
              <p>Direct debit</p>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Account</p>
              <p>000000 | 00-00-00</p>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Next due</p>
              <p>Fri 24th March</p>
            </Stack>
          </Stack>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'8px'}}><Button variant="outlined">Change payment details</Button></div>
          <Stack spacing={-3}>
            <h3>Total paid</h3>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Rent</p>
              <p>£1000</p>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Rent holiday pot</p>
              <p>£100</p>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <p>Donations</p>
              <p>£100</p>
            </Stack>
            <div style={{ borderBottom: '1px solid black', marginTop: '0px', marginBottom: '32px' }}></div>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <strong>Total</strong>
              <strong>£1200</strong>
            </Stack>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
}