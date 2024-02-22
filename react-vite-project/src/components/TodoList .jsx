import { TextField, List, ListItem, Button } from "@mui/material";
import { useState } from "react";
import { toDoItems } from "../data";

export default function TodoList() {
  const [toDoList, setToDoList] = useState([...toDoItems]);
  const [newToDo, setNewToDo] = useState("");

  function addNewToDo() {
    setToDoList([
      ...toDoList,
      {
        id: toDoList.length + 1,
        title: `ToDo title ${toDoList.length + 1}`,
        text: `${newToDo}`,
      },
    ]);
    setNewToDo("");
  }

  return (
    <>
      <TextField
        variant="outlined"
        label="Enter new toDo item"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            return addNewToDo();
          }
        }}
      />
      <Button variant="contained" onClick={() => addNewToDo()}>
        Add new toDo
      </Button>
      <List>
        {toDoList.map((toDo) => (
          <ListItem key={toDo.id}>
            <h4 style={{ marginRight: "10px" }}>{toDo.title}:</h4>
            <p>{toDo.text}</p>
          </ListItem>
        ))}
      </List>
    </>
  );
}
