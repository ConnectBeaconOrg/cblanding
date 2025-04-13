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
import DevExpertise from './components/DevExpertise';

function App() {
  return (
    <div className="App" id='home'>
      {/* Navigation Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '0.5rem 2rem',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        <AppAppBar />
      </div>

      {/* Hero Section with fixed background */}
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: "url('/assets/AI-connectivity.png')", // Place your background here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
        overflow: 'hidden',
        marginTop: '80px'
      }}>
        {/* Dark overlay for readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'hsla(0, 100%, 90%, 0.3)',
            zIndex: 1
          }}
        ></div>

        <Grid2
          container
          spacing={2}
          alignItems="center"
          justifyContent={'space-evenly'}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Grid2 item xs={12} md={6}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <Typography variant='h3' fontWeight='bold' sx={{ color: '#003366' }}>
                Connect Beacon
              </Typography>
              <br />
              <Typography variant='h5' sx={{ color: '#f1f1f1' }}>
                Empowering Businesses with Intelligent Connectivity
              </Typography>
              <p style={{ fontSize: '1.1rem', color: '#e0e0e0', marginTop: '1rem' }}>
                Scalable, secure, and innovative networking solutions—built for the modern digital landscape.
              </p>
              <br />
              <Link
                to="about"
                className="cta-button"
                smooth={true}
                duration={500}
                style={{
                  backgroundColor: '#002f6c',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
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
      <DevExpertise />
      <SuccessMetrics />
      <Conatct />
      <BookDemo />
      <Footer />
    </div>
  );
}

export default App;

