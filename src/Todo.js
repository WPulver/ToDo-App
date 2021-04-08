import React from 'react'
import { List, ListItem, ListItemText, Button, GridList } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete'

function Todo(props) {
    return (
        <List className="todo_list">
            <GridList container>
                <GridList item xs='12'>
                    <ListItem>
                        <ListItemText primary={props.todo.text} secondary={props.todo.deadline} />
                    </ListItem>
                    <ListItem>
                        <DeleteIcon fontSize='small' onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                    </ListItem>
                </GridList>
            </GridList>
        </List>
    )
}

export default Todo
