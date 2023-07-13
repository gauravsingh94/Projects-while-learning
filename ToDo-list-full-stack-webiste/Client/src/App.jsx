import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./App.css";

function App() {

  

  const [todos, setTodos] = useState([]);
  const [inputData, setInputData] = useState("");
  const [descriptionData, setDescriptionData] = useState("");
  // fetch all todos from server

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescriptionData(e.target.value);
  };

  const fetchUserData = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    fetchUserData();
    const interval = setInterval(fetchUserData, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const deleteTodo = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error deleting todo");
        }
      })
      .catch((error) => {
        console.error("Error while deleting todo:", id);
      });
  };

  const addTodo = () => {
    const title = inputData;
    const description = descriptionData;

    console.log(title);
    console.log(description);

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log("data logged:", data);
      })
      .catch((error) => {
        console.error("Error while deleting todo:", id);
      });
  };

  return (
    <div className="container">
      <Box>
        <Card sx={{ minWidth: 275 ,backgroundColor: "#F5F5F5"}}>
          <CardContent>
            <div>
              <h1>Easy Todo App</h1>
              <TextField
                id="outlined-basic"
                onChange={handleInputChange}
                label="Title"
                variant="outlined"
                color="primary"
              />
              <br />
              <br />
              <div className="description">
                <TextField
                  id="outlined-basic"
                  onChange={handleDescriptionChange}
                  label="Description"
                  variant="outlined"
                />
                <br />
                <IconButton aria-label="add" onClick={addTodo}>
                  <AddBoxIcon />
                </IconButton>
              </div>
              <div className="list-todo">
                <ul>
                  {todos.map((todo) => (
                    <li>
                      <Todo
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        deleteTodo={deleteTodo}
                        id={todo.id}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

function Todo(props) {
  // Add a delete button here so user can delete a TODO.
  const handleDelete = () => {
    props.deleteTodo(props.id);
  };
  return (
    <div>
      <div className="todo">
        <h3>{props.title}</h3>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
