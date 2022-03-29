import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Farming.css'
const Farming = () => {
    return (
      <div>
        <div className="farmingbanner">
          {/* <h1 className="centerexport"></h1> */}
        </div>
        <Container className="customfarming">
          <Grid className="customfarming" container spacing={0}>
            <Grid item xs={6}>
              <div className="farmingtitle">
                <h3>Agro Farming</h3>
              </div>
            </Grid>
            <Grid item xs={6}>
              <p>
                AGROVERSE started its agro-farming industry with an aim to
                propel the agro-food business through the application of new
                technology, logistic solutions, and best practices that are
                sequential with international food safety standards. The
                objective is to inspire farmers and other players of the
                Agro-industry with the ability to grow locally for a more
                sustainable future of food production. <br /> <br /> AGROVERSE
                strives to restructure the agricultural sector into a modern,
                viable, and sustainable venture and revitalize the sector as a
                sustainable pillar of economic growth through the vertical
                integration of the supply chain which involves production,
                processing, manufacturing, packaging, branding, and
                distribution. Currently, AGROVERSE is running its agro-farming
                services through Food Cultivation, Dairy, and Fisheries locally
                in Bangladesh.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default Farming;