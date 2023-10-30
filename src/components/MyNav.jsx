import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = function () {
   return (
      <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
         <Container fluid>
            <Navbar.Brand href="#">Epic Bookshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
               >
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browse</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default MyNav;
