import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList ";
// import CommentsList from "./components/CommentsList/CommentsList";
// import Message from "./components/Message/Message";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* <Message>Lorem ipsum dolor sit amet.</Message>
      <Message>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
        ducimus.
      </Message>
      <CommentsList></CommentsList> */}
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}
