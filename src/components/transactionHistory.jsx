import React from 'react'
import Stack from '@mui/material/Stack'


export default function TransactionHistory() {
  return (
    <div>
      <Stack>
        <Stack direction="row">
          <h4 sx={{margin:"0px !important"}}>February</h4>
          <div></div>
        </Stack>
        <div>
          <Stack direction="row" sx={{ display:"flex", justifyContent:"space-between"}}>
            <div spacing={-3}>
              <p style={{ padding:"0px !important", marginBlockEnd:"0px !important"}}>04</p>
              <p style={{ padding:"0px !important", marginBlockEnd:"0px !important"}}>New paint for the kitchen</p>
            </div>
            <p>£25</p>
          </Stack>
        </div>
      </Stack>
    </div>
  )
}