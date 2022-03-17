import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import pattern from '../../Assets/resourse/patterns.webp'
import { styled } from '@mui/material/styles';
import vision from '../../Assets/vision_fall2019_the-future-of--removebg-preview.png'
import Paper from '@mui/material/Paper';
import men from '../../Assets/white-collar-worker-man-well-groomed-formal-elegant-shirt-background-menswear-style-guy-handsome-office-working-dress-code-169443557-removebg-preview.png'
import CustomButton from '../../Components/styles/Button.style';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const About = () => {
    return (
        <div className='rootabout'>
          <div className='motherbannerabout'>
          <div className='aboutbanner'>
                <h1 className='centeredabout'>“A good farmer is nothing <br /> more nor  less than a handy <br />  man with a sense of humus.”</h1>
            </div>
          </div>

{/* abot us part */}

        <Container className='customAbout'>
          
            
      <Grid className='customabout' container spacing={0}>
                <Grid  item xs={6}>
                   <div  className='abouttitle'>
                   <h1>About Us</h1> 
                   </div>
                </Grid>
                <Grid item xs={6}>
                 <p>Founded in 2021, AgroVerse is a universal agricultural food products processing and manufacturing company located in Bangladesh. <br /> <br />

AgroVerse is working closely with farmers; sourcing raw materials directly from them and authentic suppliers; processing and manufacturing agro-products maintaining high moral standards to ensure the utmost quality of the produce; and delivering the products to customers to satisfy their needs. As a comprehensive agro-business company, AgroVerse is marketing agro-products locally in Bangladesh and exporting them to different parts of the globe including Europe, North America, the Middle East, and South-East Asia.
</p>
<CustomButton>Read More</CustomButton>

                </Grid>
               
               
    </Grid>
    </Container>
    
    <div className='try'>

<h5 className=' deviderContent  text-center container'>AGROVERSE believes that the Global Food Security Challenge can be solved through innovation, and invests a lot in research to innovate sustainable agro-products to fulfill future exigency. </h5>
<img className='patternabout' src={pattern} alt="" srcset="" />
</div>


{/* missin vision part */}

<div className='missionvision'>

<Grid  container rowSpacing={15} columnSpacing={15}>


                  
              
               <Grid item lg={6}>

                   <img className='mx-auto img-fluid' src={vision} alt="" srcset="" />


                   </Grid>
                <Grid className='missionvisioncontent' item lg={6}>
                <div>
                <div>
                  <h4>OUR MISSION</h4> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque harum doloremque tempore consequatur sequi, nihil laudantium sint molestiae recusandae.</p>
                  </div>
                  <br /> <br /> <br />
                  <div>
                  <h4>OUR VISION</h4> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque harum doloremque tempore consequatur sequi, nihil laudantium sint molestiae recusandae.</p>
                  </div>
                </div>
                </Grid>
               

              
             
               
    </Grid>






</div>


{/* Board of director part */}

<div className='container mb-5 pb-5'>
      <div className='abouttitle mb-5'>
       <h1>Board of Directors</h1> 
         </div>

<Grid container spacing={2}>
  <Grid item xs={4}>
    <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
   
  </Grid>
  <Grid item xs={4}>
  <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className='bom mx-auto'>
    <div>
    <img src={men} alt="" srcset="" />
          <h4>hussain k m tansir</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias.</p>
    </div>
    </div>
  </Grid>
</Grid>
</div>
           
        
        </div>
    );
};

export default About;