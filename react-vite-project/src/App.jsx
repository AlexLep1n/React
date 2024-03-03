import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
// import TemperatureConverter from "./components/TemperatureConverter";
// import TodoList from "./components/TodoList ";
// import CommentsList from "./components/CommentsList/CommentsList";
// import Message from "./components/Message/Message";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "*",
      element: (
        <>
          <h1>Not Found</h1>
          <Link to="/">Home</Link>
        </>
      ),
    },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RouterProvider router={router} />
      {/* <Message>Lorem ipsum dolor sit amet.</Message>
      <Message>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
        ducimus.
      </Message>
      <CommentsList></CommentsList> */}
      {/* <TemperatureConverter />
      <TodoList /> */}
    </div>
  );
}
