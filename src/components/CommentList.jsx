import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = function (props) {
   // console.log(props);
   return (
      <ListGroup>
         {props.comments.map((comment) => {
            return (
               <SingleComment
                  key={comment._id}
                  review={comment.comment}
                  rate={comment.rate}
                  elementId={comment._id}
               />
            );
         })}
      </ListGroup>
   );
};

export default CommentList;
