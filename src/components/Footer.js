import React from 'react';
import { socialLinks } from '../data';
import { pageLinks } from '../data';
import Pagelinks from './Pagelinks';
import Sociallinks from './Sociallinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links" id="footer-link">
        {pageLinks.map((link) => {
          return <Pagelinks key={link.id} {...link} itemClass="footer-link" />;
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <Sociallinks key={link.id} {...link} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
