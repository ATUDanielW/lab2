import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route 

} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Read">Read</Nav.Link>
            <Nav.Link href="/Create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/' element={<Footer></Footer>}></Route>
      </Routes>

        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;
