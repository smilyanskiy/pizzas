import React from 'react';
import InstallPromotion from 'services/InstallPromotion';
import Container from 'react-bootstrap/Container';
import styles from './styles.css';

const Footer = () => (
  <footer className={`${styles.footer} text-muted`}>
    <Container fluid>
      <div className="d-flex justify-content-between">
        <i>Copyright free 2020</i>
        <InstallPromotion />
      </div>
    </Container>
  </footer>
);

export default Footer;
