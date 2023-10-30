import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Welcome = function () {
   const [show, setShow] = useState(true);

   return (
      <>
         <Alert show={show} variant="success" className="m-2 text-center">
            <Alert.Heading>Welcome</Alert.Heading>
            <p>Welcome to epic online book store in the World!</p>
            <hr />
            <div className="d-flex justify-content-end">
               <Button onClick={() => setShow(false)} variant="outline-success">
                  Close me
               </Button>
            </div>
         </Alert>

         {/* {!show && (
            <Button className="m-2" onClick={() => setShow(true)}>
               Show Alert
            </Button>
         )} */}

         <h1 className="text-center m-3">Epic Bookshop</h1>
      </>
   );
};

export default Welcome;
