import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
   state = {
      selected: false,
      // selectedBook: this.props.currentBook.asin,
   };

   render() {
      // console.log("single book", this.state.selectedBook);
      return (
         <>
            <Card className="" border={this.state.selected ? "danger" : ""}>
               <Card.Img
                  onClick={() => {
                     this.setState({ selected: !this.state.selected });
                     this.props.setSelectedBook(this.props.currentBook.asin);
                  }}
                  variant="top"
                  className="h-75"
                  src={this.props.currentBook.img}
               />
               <Card.Body>
                  <Card.Title>{this.props.currentBook.title}</Card.Title>
                  <Card.Text>Price: $ {this.props.currentBook.price}</Card.Text>
                  <Button variant="primary">Order</Button>
               </Card.Body>
            </Card>
            <div>
               {this.state.selected && (
                  <CommentArea elementId={this.props.currentBook.asin} />
               )}
            </div>
         </>
      );
   }
}

export default SingleBook;
