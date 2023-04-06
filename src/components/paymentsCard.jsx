import { Card, CardContent, IconButton, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaymentsCard(props) {
  return (
    <Card sx={{ padding:"0px", marginTop:"12px", marginBottom:"12px"}}>
      <CardContent sx={{ paddingTop:"0px", paddingBottom:"0px !important"}}>
        <div>
          <Stack direction="row" sx={{justifyContent:"space-between"}}>
            <Stack spacing={-3} sx={{ width:"100%", maxWidth:"200px", marginRight:"48px"}}>
              <h3 sx={{padding:"0px !important", margin:"0px !important"}}>{props.title}</h3>
              <Stack direction="row" sx={{ display:"flex", justifyContent:"space-between" }}>
                <p>{props.total}</p>
                <p>{props.monthly}</p>
              </Stack>
            </Stack>
            <div style={{ display:"flex", alignItems:"center" }}>
              <IconButton aria-label="link" style={{ color:"#FFFFFF", backgroundColor:"#0D5D56" }}>
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
}