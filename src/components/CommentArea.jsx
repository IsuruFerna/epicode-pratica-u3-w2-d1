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
         // "https://striveschool-api.herokuapp.com/api/comments/" +
         //    this.props.elementId,
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

   componentDidMount() {
      this.getComments();
   }

   render() {
      console.log("uni: ", this.props);
      return (
         <div className="p-3 border rounded-1">
            {this.state.isLoading && (
               <div className="text-center">
                  <Spinner animation="border" />
               </div>
            )}
            {this.state.isError && <ComponentError />}
            <CommentList comments={this.state.comments} />
            <AddComment elementId={this.props.elementId} />
         </div>
      );
   }
}

export default CommentArea;
