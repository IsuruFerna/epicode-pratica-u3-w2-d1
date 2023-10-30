import { Trash3Fill } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";

class SingleComment extends Component {
   deleteComment = (e) => {
      e.preventDefault();
      console.log("Remove me");
      fetch(
         "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.elementId,
         {
            method: "DELETE",
            headers: {
               Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzVkYWY2ZTNkZDAwMTQ5NWU0OWQiLCJpYXQiOjE2OTgzMzAwNzQsImV4cCI6MTY5OTUzOTY3NH0.tYZsMhhS_yqnCH1v4ULCoAeBdA9DXGK1tTakH4XmpPM",
            },
         }
      )
         .then((res) => {
            if (!res.ok) {
               throw new Error(
                  "Something went wrong while deleting the comment!"
               );
            }
            console.log("Comment Deleted!");
         })
         .catch((err) => console.log("ERROR", err));
   };

   render() {
      return (
         <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
               {this.props.review} | {this.props.rate}
            </div>
            <div className="d-flex align-items-center">
               <Trash3Fill onClick={this.deleteComment} />
            </div>
         </ListGroup.Item>
      );
   }
}

export default SingleComment;
