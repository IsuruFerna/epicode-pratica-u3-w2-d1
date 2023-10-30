import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class AddComment extends Component {
   state = {
      commentObj: {
         comment: "",
         rate: "1",
         elementId: this.props.elementId,
      },
   };

   postNewComment = (e) => {
      e.preventDefault();
      fetch("https://striveschool-api.herokuapp.com/api/comments/", {
         method: "POST",
         body: JSON.stringify(this.state.commentObj),
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzVkYWY2ZTNkZDAwMTQ5NWU0OWQiLCJpYXQiOjE2OTgzMzAwNzQsImV4cCI6MTY5OTUzOTY3NH0.tYZsMhhS_yqnCH1v4ULCoAeBdA9DXGK1tTakH4XmpPM",
            "Content-Type": "application/json",
         },
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("Error Post comment!");
            }
            return response.json();
         })
         .then((data) => {
            console.log("Comment Posted", data);
            alert("Comment Posted!");
         })
         .catch((err) => console.log("ERROR", err));
   };

   render() {
      return (
         <Form onSubmit={this.postNewComment}>
            <Form.Group className="mb-3">
               <Form.Label>Comment</Form.Label>
               <Form.Control
                  value={this.state.commentObj.comment}
                  onChange={(e) => {
                     this.setState({
                        commentObj: {
                           ...this.state.commentObj,
                           comment: e.target.value,
                        },
                     });
                  }}
                  required
                  as="textarea"
                  rows={3}
               />
            </Form.Group>
            <Form.Group className="mb-3">
               <Form.Label>Rating</Form.Label>
               <Form.Select
                  aria-label="Rate"
                  value={this.state.commentObj.rate}
                  onChange={(e) => {
                     this.setState({
                        commentObj: {
                           ...this.state.commentObj,
                           rate: e.target.value,
                        },
                     });
                  }}
               >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
               Send
            </Button>
         </Form>
      );
   }
}

export default AddComment;
