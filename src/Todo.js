import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
function Todo({task, completed, removeTodo, toggleTodo, editTodo,id}){
    const [isEditing, toggle] = useToggleState(false);
    return (
       
        <ListItem style={{heigh: "64px"}}>
            {isEditing ? (
                <EditTodoForm
                    editTodo = {editTodo} 
                    id={id} 
                    task={task} 
                    toggleEditForm={toggle}
                    />
            ):(
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}></Checkbox> 
                <ListItemText style={{textDecoration: completed? "line-through": "none"}}>{task}</ListItemText> 
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={()=> removeTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}
export default Todo;