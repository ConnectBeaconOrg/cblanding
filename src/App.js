// src/App.js
import React from 'react';
import './App.css';
import LighthouseAnimation from './components/LighthouseAnimation';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      {/* Navigation Menu */}
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Landing Section */}
      <header className="landing-section">
        <LighthouseAnimation />
        <h1>Connect Beacon</h1>
        <p>Your gateway to seamless connectivity.</p>
        <Link
          to="home"
          className="cta-button"
          smooth={true}
          duration={500}
        >
          Learn More
        </Link>
      </header>

      {/* Home Section */}
      <section id="home" className="section">
        <h2>Home</h2>
        <p>
          At Connect Beacon, we specialize in providing top-notch connectivity solutions and SaaS products to help businesses thrive in a digital world. Our dedicated team bridges the gap between technology and your business needs, ensuring seamless integration and exceptional performance.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          Connect Beacon is a leading services company focused on delivering innovative connectivity solutions and cutting-edge SaaS products. We empower businesses to connect seamlessly and operate efficiently in today's fast-paced technological landscape.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          We're here to assist you with your connectivity and SaaS needs. Reach out to us at (connectbeaconnet@gmail.com) for collaboration, inquiries, or to learn more about how Connect Beacon can drive your business forward.
        </p>
      </section>
    </div>
  );
}

export default App;
