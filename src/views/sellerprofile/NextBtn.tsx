import { Grid } from '@mui/material';
import React from 'react';
import LANG_STRINGS from '../../enums/langStrings';
const NextBtn = ({ mand_fields, handleNext, handleBack, translate }: any) => {
  return (
    <Grid container sx={{ marginTop: '1px' }} spacing={4}>
      <Grid item lg={9} sx={{ color: 'black' }}>
        {mand_fields}
      </Grid>

      <Grid item lg={1.5}>
        <Grid
          sx={{
            width: '150px',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid black',
            cursor: 'pointer',
          }}
          onClick={() => handleBack()}
        >
          {translate(LANG_STRINGS.BACK_BTN)}
        </Grid>
      </Grid>
      <Grid item lg={1.5}>
        <Grid
          sx={{
            width: '150px',
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleNext()}
        >
          {translate(LANG_STRINGS.NEXT_BTN)}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NextBtn;
