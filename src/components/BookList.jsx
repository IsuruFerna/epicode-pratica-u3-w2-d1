import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
   state = {
      selectedBook: "0316438960",
   };

   setSelectedBook = (newSelected) => {
      this.setState({
         selectedBook: newSelected,
      });
   };

   render() {
      return (
         <Container>
            <Row>
               <Col xs={6}>
                  <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
                     {this.props.bookGenre.map((book) => {
                        return (
                           <Col key={book.asin} className="my-3">
                              <SingleBook
                                 setSelectedBook={this.setSelectedBook}
                                 currentBook={book}
                              />
                           </Col>
                        );
                     })}
                  </Row>
               </Col>
               <Col xs={6}>
                  <CommentArea selectedBook={this.state.selectedBook} />
               </Col>
            </Row>
         </Container>
      );
   }
}
// const BookList = function (prop) {
//    return (
//       <Container>
//          <Col xs={6}>
//             <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
//                {prop.bookGenre.map((book) => {
//                   return (
//                      <Col key={book.asin} className="my-3">
//                         <SingleBook currentBook={book} />
//                      </Col>
//                   );
//                })}
//             </Row>
//          </Col>
//          <Col xs={6}>
//             <CommentArea />
//          </Col>
//       </Container>
//    );
// };

export default BookList;
