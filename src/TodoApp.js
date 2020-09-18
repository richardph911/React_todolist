import React, { useEffect} from 'react';
import useTodoState from './hooks/useTodoState';

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// import { v4 as uuidv4 } from 'uuid';
// import useToggleState from './hooks/useToggleState';
function TodoApp(){
    //using local storage to display init values
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    // const initialTodos =[
    //     {id: 1, task:'Do wash', completed: true},
    //     {id: 2, task:'Eat', completed: true},
    //     {id: 3, task:'Tennis', completed: false},

    // ]
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);
// this will run everytime the component render
    useEffect(()=>{
       
        window.localStorage.setItem("todos", JSON.stringify(todos))
    },[todos]);

    // const addTodo = (newTodoText) => {
    //     setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    // };
    // const removeTodo = todoId =>{
    //     const updatedTodos = todos.filter(todo => todo.id !== todoId);
    //     setTodos(updatedTodos);
    // };
    // const toggleTodo = todoId =>{
    //     const updatedTodos = todos.map( todo => 
    //         todo.id === todoId ? { ...todo, completed: !todo.completed} : todo)
    //     setTodos(updatedTodos);
    // };
    // const editTodo = (todoId, newTask) =>{
    //     const updateTodos = todos.map( todo => 
    //         todo.id === todoId ? {...todo, task: newTask}: todo
    //     );
    //     setTodos(updateTodos);

    // }
    return (
        <Paper style = {{padding: 0, margin: 0, height: "100vh", backgroundColor: "white" }} elevation={0}>

            <AppBar color='primary' position='static' style={{height:"64px" }}>
                <ToolBar>
                    <Typography color='inherit'>
                        TODOs WITH HOOLS
                    </Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos = {todos}  
                        removeTodo ={removeTodo} 
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        />
                 </Grid>
            </Grid>

        </Paper>
    );
}
export default TodoApp;
