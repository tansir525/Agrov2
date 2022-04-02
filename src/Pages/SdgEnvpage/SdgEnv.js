import { Grid } from '@mui/material';
import React from 'react';
import './SdgEnv.css'
import earth from "../../Assets/Environment/iStock-459402045-Converted-removebg-preview.png";
import devid from '../../Assets/resourse/grey_pattern.webp'
import { Container } from 'react-bootstrap';
import poverty from "../../Assets/Agro Illustrations/No proverty.png";
import zerohungar from "../../Assets/Agro Illustrations/Zero Hunger.png";
import goodhealth from "../../Assets/Agro Illustrations/Goof health and well being.png";
import decentwork from "../../Assets/Agro Illustrations/Decent work and economic growth.png";
import responsibleconsumption from "../../Assets/Agro Illustrations/Responsible consumption and production.png";
import climate from "../../Assets/Agro Illustrations/Climate Action.png";


const SdgEnv = () => {
    return (
      <div>
        <div className="sdgenvbanner">
          <h1 className="centersdgenv">
            “A sustainable agriculture is one
            <br /> which depletes neither the <br /> people nor the land.”
          </h1>
        </div>

        <div className="">
          <Container>
            <div className="container sdgenv1">
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className="sdgenv1">
                    <img src={earth} alt="" srcset="" />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <h4>
                    Achieving the SDGs through Transformation, Innovation, and
                    Holistic Approach
                  </h4>
                  <p>
                    To resolve some of the major Global Challenges, and achieve
                    the Sustainable Development Goals (SDGs) including No
                    Poverty, Zero Hunger; Good Health and Well Being, Decent
                    Work and Economic Growth, Responsible Consumption and
                    Production; and Climate Action, AGROVERSE is envisioned to
                    contribute through the transformation of its agro-business
                    model into a sustainable development framework, holistic
                    approach, innovation, and good practices.
                  </p>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="dev">
            <img src={devid} alt="" srcset="" />
          </div>
          <div className="sdgenv-bg">
            <Container>
              <div className="sd-h2 mt-5">
                {/* <h2>Our Approach To Sustainability</h2> */}
                <Grid className="mb-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div class="insidesdg sdgmonileimg">
                      <img className="sdgimg img-fluid" src={poverty} alt="" />
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>No Poverty</h3>
                    </div>
                    <p className="mt-3">
                      One of the toughest and greatest challenges humanity is
                      facing nowadays is eradicating poverty in all its forms.
                      According to a report by the United Nations (2015), 736
                      million people, about 10 percent of the world population
                      live in extreme poverty. Though the extreme poverty rate
                      has decreased from 36 percent to 10 percent between 1990
                      and 2015, the world has again seen the rise of extreme
                      poverty rate because of the Covid-19 Pandemic, and
                      economic fallout caused by the Covid-19 situation will
                      push another 71 million people to extreme poverty (UNU
                      World Institute for Development Economics Research).
                      Therefore, the UN aims to eradicate poverty with its
                      Sustainable Development Goals (SDG), launched in 2015,
                      through SDG 1: No Poverty. <br /> <br />
                      Agro-business is crucial to economic growth and can play a
                      vital role to end poverty in the developing world, despite
                      the fact, a vast population in the developing countries
                      are living under the poverty line due to a lack of access
                      to modern technology, information, production factors, and
                      so on.
                    </p>
                  </Grid>
                </Grid>
                <Grid className="mb-5 mt-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>Zero Hunger</h3>
                    </div>

                    <p className="mt-3">
                      For decades, Malnutrition and Undernourishment caused by
                      hunger have remained a plaguing issue all over the globe.
                      A study conducted by the United Nations (2015) shows that
                      8.9 percent of the world population (690 million) is
                      hungry, nearly 60 million people have increased in the
                      last five years, and by 2030 the number of people affected
                      by hunger would surpass 840 million if the trend
                      continues. Moreover, different reasons including man-made
                      conflicts, climate change, and economic downturns have
                      caused 135 million people to suffer from acute hunger
                      (World Food Programme), and the COVID-19 pandemic has
                      doubled the number adding 130 million people to the list
                      after 2020. <br /> <br />
                      AGROVERSE ensures minimum waste of food by eliminating the
                      factors through food processing. AGROVERSE manufactures
                      and promotes sustainable production of safe, nutritious,
                      diverse, and culturally acceptable food with minimal
                      resources and expenses to ensure everyone has access to
                      nutritious food. AGROVERSE strives to reduce hunger
                      through its services, and contribute to assisting the UN
                      to achieve SDG 02- Zero Hunger.
                    </p>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <img
                        className="sdgimg img-fluid"
                        src={zerohungar}
                        alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid className="mb-5 mt-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <img
                        className="sdgimg img-fluid"
                        src={goodhealth}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>Good Health and Well Being</h3>
                    </div>

                    <p className="mt-3">
                      Ensuring healthy life and promoting well-being is
                      important to building prosperous societies. Though
                      advancements have been made on many health fronts, 38
                      million people die from non-communicable diseases every
                      year. Not only that Malnutrition is considered the single
                      largest contributor to disease all over the globe.
                      Moreover, the COVID-19 pandemic has devastated health
                      systems globally and threatens already achieved health
                      outcomes.
                      <br /> <br />
                      The SDG 03 ensures healthy life and promotes well-being
                      for all at all stages. Agro-business can play a crucial
                      role to achieve this goal by promoting sustainable
                      agriculture practices, product quality, and safety.
                      Besides, reducing the use of hazardous chemicals,
                      eliminating factors causing environmental pollution, and
                      producing more nutritious agro products, Agro Business can
                      contribute to ensuring healthy life and promoting
                      well-being.
                    </p>
                  </Grid>
                </Grid>
                <Grid className="mb-5 mt-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>Decent Work and Economic Growth</h3>
                    </div>

                    <p className="mt-3">
                      Sustained and inclusive economic growth is a prerequisite
                      and crucial factor for sustainable development that can
                      lead to new and better employment opportunities, provide
                      greater economic security and improve living standards.
                      The number of workers living in extreme poverty has
                      declined over the past 25 years, despite the fact,
                      COVID-19 has disrupted billions of lives and endangered
                      the global economy causing a global recession worse than
                      in 2009. <br /> <br />
                      In this challenging situation, agro-business can play a
                      vital role by creating more secure and varied jobs and
                      contribute to achieving SDG 8: Decent Work and Economic
                      Growth, especially in the rural areas where most of the
                      world's poor live and work. But the goal cannot be
                      achieved without fostering decent work through improved
                      working conditions, occupational safety and health,
                      adequate living wages, and training.
                    </p>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <img
                        className="sdgimg img-fluid"
                        src={decentwork}
                        alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid className="mb-5 mt-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <img
                        className="sdgimg img-fluid"
                        src={responsibleconsumption}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>Responsible Consumption and Production</h3>
                    </div>

                    <p className="mt-3">
                      The dramatic expansion of worldwide material consumption
                      and availability of everyday items have jeopardized our
                      natural resources, ecosystems, as well as the health of
                      humans on a global scale. According to a recent report by
                      the United Nations, the unsustainable use of natural
                      resources cause the dramatic increase of Global Material
                      Footprint from 73.2 billion metric tons to 85.9 billion
                      metric tons within 7 years from 2010 to 2017. <br />{" "}
                      <br />
                      Other studies found that 91% of plastics in the world are
                      not recycled (Science Advance, 2019), and less than 20% of
                      electronic waste is recycled while the growth is 38% from
                      2010 to 2019 (the United Nations). Moreover, an estimated
                      one-third of all food produced worldwide (1.3 billion
                      tonnes) is spoiled due to poor transportation and
                      harvesting practices, and 12% of food is lost during
                      harvesting, transporting storage, and processing periods
                      only in 2016 (the United Nations). Therefore, responsible
                      consumption and production are a must to reverse the harms
                      that have been inflicted on the planet. This goal can be
                      achieved only by promoting resource and energy efficiency,
                      sustainable infrastructure, and providing access to basic
                      services, green and decent jobs, and a better quality of
                      life for all.
                    </p>
                  </Grid>
                </Grid>
                <Grid className="mb-5 mt-5" container spacing={5}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <h3>Climate Action</h3>
                    </div>

                    <p className="mt-3">
                      Climate change is an undeniable threat to our entire
                      civilization, the basis of serious consequences for our
                      daily lives and the resilience of our planet. Carbon
                      dioxide (CO2), and other greenhouse gases are the main
                      reason for climate change and global warming, and
                      according to the United Nations, the level of CO2 and
                      other greenhouse gases are at the highest level now,
                      making a new record in 2019. <br /> <br />
                      Due to climate change and global warming, sea levels are
                      rising and oceans are warming, longer and more intense
                      drought are experienced which badly disrupts the global
                      economy. The agriculture sector is greatly threatened.
                      Thus, urgent actions to tackle climate change and its
                      impacts are needed. Otherwise, climate change will reduce
                      the productivity of crops, livestock, and fishery, and
                      will greatly affect food availability. Moreover, it will
                      disturb the livelihoods of millions of rural people who
                      depend on agriculture for their incomes and will hinder
                      their access to food.
                    </p>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="sdgenvtext">
                      <img className="sdgimg img-fluid" src={climate} alt="" />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
};

export default SdgEnv;