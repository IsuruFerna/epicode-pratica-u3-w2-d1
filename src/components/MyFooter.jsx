import Container from "react-bootstrap/Container";

function MyFooter() {
   return (
      <Container fluid>
         <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
               <li className="nav-item">
                  <a href="#home" className="nav-link px-2 text-body-secondary">
                     Home
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     href="#about"
                     className="nav-link px-2 text-body-secondary"
                  >
                     About
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     href="#browse"
                     className="nav-link px-2 text-body-secondary"
                  >
                     Browse
                  </a>
               </li>
            </ul>
            <p className="text-center text-body-secondary">
               © 2023 Epic Bookshop
            </p>
         </footer>
      </Container>
   );
}

export default MyFooter;
