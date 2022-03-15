import { Grid } from '@mui/material';
import React from 'react';
import carbon from '../../Assets/resourse/eco-services-center-img.png'

import './ZeroCarbon.css'

const ZeroCarbon = () => {
    return (
        <div>
            
            
<div class="parallax">
<h1 className='Carbonh1'>OUR CLIMATE TARGET</h1>

<Grid container spacing={0}>
  <Grid className='Carbonp1' item xs={4}>
  <h5 className=' text-end'>AGROVERSE is envisioned to increase the climate change resilience of agriculture and food systems, and reduce CO2 and greenhouse gas emissions through sustainable intensification. </h5>
  </Grid>
  <Grid className='carbonpic' item xs={4}>
    <img src={carbon} alt="" />
  </Grid>
  <Grid className='Carbonp2' item xs={4}>
  <h5 className=' text-start'>We target is to become a net-zero emissions energy business by 2050, in step with society's progress in achieving the goal of the UN Paris Agreement on climate change.</h5>
  </Grid>
  
</Grid>




</div>


        </div>
    );
};

export default ZeroCarbon;