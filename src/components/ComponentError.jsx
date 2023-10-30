import Alert from "react-bootstrap/Alert";

const ComponentError = function () {
   return (
      <Alert variant="danger">
         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
         <p>Something went wrong while loading comments!</p>
      </Alert>
   );
};

export default ComponentError;
