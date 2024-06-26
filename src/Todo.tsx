import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <TextField
        label="Escribe..."
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddTodo();
        }}
        style={{ marginBottom: 20 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
        style={{ marginBottom: 25 }}
        startIcon={<AddCircleIcon />}
      >
        Agregar Tarea
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} dense button>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleDeleteTodo(todo.id)}>
                     <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoApp;
