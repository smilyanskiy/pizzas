import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Basket from 'services/Basket';
import BreadMenu from 'components/BreadMenu';
import styles from './styles.css';
import { getNavList } from 'core/product';
import { Link } from 'react-router-dom';

const Header = () => {
  const [ nav, setNav ] = useState([]);

  useEffect(() => 
    setNav(getNavList()), 
  []);

  return (
    <Container fluid className={styles.fixed_header}>
      <header className={styles.blog_header}>
        <div className="d-flex justify-content-around align-items-center">
          <Col xs={8}>
            <Link className={styles.blog_header_logo} to="/">
              Pizzas
            </Link>
          </Col>
          <Col xs={4} className="pr-4 d-flex justify-content-end align-items-center">
            <Basket />
          </Col>
        </div>
      </header>
      <div className="nav-scroller py-1">
        <Nav className={`${styles.nav_content} d-flex`}>
          <BreadMenu
            links={nav}
          />
        </Nav>
      </div>
    </Container>
  );
};

export default Header;