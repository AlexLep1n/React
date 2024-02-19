/* eslint-disable no-unused-vars */
import { useState } from "react";
import { commentsData } from "../../data";
import Button from "../Button";
import classes from "./CommentsList.module.css";

export default function CommentsList() {
  const [comments, setComments] = useState([...commentsData]);

  function deleteComment(event) {
    const p = event.target.closest("li").querySelector("p");
    setComments(comments.filter((comment) => comment.text !== p.textContent));
  }

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className={classes.comment}>
            <p>{comment.text}</p>
            <Button onTouch={deleteComment}>Delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
