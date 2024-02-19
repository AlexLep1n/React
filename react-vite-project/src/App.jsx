import "./App.css";
import CommentsList from "./components/CommentsList/CommentsList";
import Message from "./components/Message/Message";

export default function App() {
  return (
    <>
      <Message>Lorem ipsum dolor sit amet.</Message>
      <Message>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
        ducimus.
      </Message>
      <CommentsList></CommentsList>
    </>
  );
}
