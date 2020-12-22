import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from './index'

const useStyles = makeStyles(() => (
    createStyles({
        "chats":{
            height:400,
            padding:"0",
            overflow:"auto",
        }
    })
));


    const Chats = (props) => {
        const classes = useStyles();

        return(
            <List className={classes.chats}>
                {props.chats.map((chat, key)=>{
                    return <Chat text={chat.text} type={chat.type} key={key.toString()} select ={props.select}/>
                })}
            </List>
            
        )
    }


export default Chats;