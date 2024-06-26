import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Guido De Filippo</h2>
        <p><a href="mailto:gd2667@columbia.edu">gd2667@columbia.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Guido. I am pursuing a Master of Science in Financial Engineering at <a href="https://engineering.columbia.edu/">Columbia University</a>. Previously, I worked as a Senior Quantitative Risk Consultant at <a href="https://www.ey.com/">Ernst & Young</a> and as a Teaching Assistant at <a href="https://www.utoronto.ca/">The University of Toronto</a>. I have also interned at <a href="https://www.scotiabank.com/">Scotiabank</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Guido De Filippo <Link to="/">guidodefilippo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
