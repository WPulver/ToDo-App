import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete'

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.todo.text} secondary={props.todo.deadline} />
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
