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
              About
            </Link>
          </li>
          <li>
            <Link to="blogs" smooth={true} duration={500}>
              Blogs
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
          [Welcome to Connect Beacon! We connect people and technology for a
          better future.]
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          [Connect Beacon is a startup focused on bridging the digital divide.]
        </p>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="section">
        <h2>Blogs</h2>
        <p>[Read our latest articles on connectivity and innovation.]</p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>[Get in touch with us for collaboration and inquiries.]</p>
      </section>
    </div>
  );
}

export default App;
