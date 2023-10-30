import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "react-bootstrap/Spinner";
import { Component } from "react";
import ComponentError from "./ComponentError";

class CommentArea extends Component {
   state = {
      comments: [],
      isLoading: true,
      isError: false,
   };

   getComments = () => {
      fetch(
         "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.selectedBook,
         {
            headers: {
               Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzVkYWY2ZTNkZDAwMTQ5NWU0OWQiLCJpYXQiOjE2OTgzMzAwNzQsImV4cCI6MTY5OTUzOTY3NH0.tYZsMhhS_yqnCH1v4ULCoAeBdA9DXGK1tTakH4XmpPM",
            },
         }
      )
         .then((response) => {
            if (!response.ok) {
               throw new Error("Error getting comments!");
            } else {
               return response.json();
            }
         })
         .then((data) => {
            console.log("Fetch went fine and data is collected", data);
            this.setState({
               comments: data,
               isLoading: false,
            });
         })
         .catch((error) => {
            console.log("ERROR!", error);
            this.setState({
               isLoading: false,
               isError: true,
            });
         });
   };

   // fetch default data
   componentDidMount() {
      if (this.props.selectedBook) {
         this.getComments();
      }
   }

   // update fetch data everytime when user clicks on a book
   componentDidUpdate(prevProps, prevState) {
      if (
         this.props.selectedBook &&
         prevProps.selectedBook !== this.props.selectedBook
      ) {
         this.getComments();
      }
   }

   render() {
      console.log("comt area selected book:", this.props.selectedBook);
      return (
         <div className="p-3 border rounded-1">
            {this.state.isLoading && (
               <div className="text-center">
                  <Spinner animation="border" />
               </div>
            )}
            {this.state.isError && <ComponentError />}
            <CommentList comments={this.state.comments} />
            <AddComment elementId={this.props.selectedBook} />
         </div>
      );
   }
}

export default CommentArea;
