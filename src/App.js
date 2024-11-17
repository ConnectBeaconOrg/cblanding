// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import LighthouseAnimation from './components/LighthouseAnimation';
import { Link } from 'react-scroll';
import AppAppBar from './components/AppBar';
import { Grid2, Typography } from '@mui/material';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import About from './components/About';
import Conatct from './components/contact';

function App() {

  return (
    <div className="App" id='home'>
      {/* Navigation Menu */}
      <AppAppBar />

      <Grid2 container spacing={2} justifyContent={'space-evenly'} className={'landing-section'}>
        <Grid2 item xs={12} md={6}>
          <Typography variant='h3'>Connect Beacon</Typography>
          <br />
          <Typography>Your gateway to seamless connectivity.</Typography>
          <br />
          <Link
            to="home"
            className="cta-button"
            smooth={true}
            duration={500}
          >
            Learn More
          </Link>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <LighthouseAnimation />
        </Grid2>
      </Grid2>
      <Highlights />
      <About />
      <Conatct />
      <Footer />
    </div>
  );
}

export default App;
