/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>React Topics</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
