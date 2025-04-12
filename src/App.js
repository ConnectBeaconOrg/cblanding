// src/App.js
import React from 'react';
import './App.css';
import LighthouseAnimation from './components/LighthouseAnimation';
import { Link } from 'react-scroll';
import AppAppBar from './components/AppBar';
import { Grid2, Typography } from '@mui/material';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import About from './components/About';
import Conatct from './components/contact';
import BookDemo from './components/BookDemo';
import AIUseCases from './components/AIUseCases';
import SuccessMetrics from './components/SuccessMetrics';

function App() {
  return (
    <div className="App" id='home'>
      {/* Navigation Menu */}
      <AppAppBar />

      {/* Hero Section with Wave Background */}
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #e0f2ff, #ffffff)',
        padding: '2rem 0',
        overflow: 'hidden'
      }}>
        {/* Background Wave SVG */}
        <img
          src="/assets/stacked-steps-haikei.svg" // Place this SVG in your public/assets folder
          alt="Wave Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <Grid2 container spacing={2} alignItems="center" justifyContent={'space-evenly'} sx={{ position: 'relative', zIndex: 1 }}>
          <Grid2 item xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant='h3' fontWeight='bold'>Connect Beacon</Typography>
              <br />
              <Typography variant='h5' color='text.secondary'>Empowering Businesses with Intelligent Connectivity</Typography>
              <p className="text-xl text-gray-600">
                Scalable, secure, and innovative networking solutions—built
                for the modern digital landscape.
              </p>
              <br />
              <Link
                to="about"
                className="cta-button"
                smooth={true}
                duration={500}
              >
                Learn More
              </Link>
            </div>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <LighthouseAnimation />
          </Grid2>
        </Grid2>
      </div>

      <Highlights />
      <About />
      <AIUseCases />
      <SuccessMetrics />
      <Conatct />
      <BookDemo />
      <Footer />
    </div>
  );
}

export default App;
