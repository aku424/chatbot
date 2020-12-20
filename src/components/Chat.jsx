import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import noImage from '../assets/img/no_profile.png'
import myImage from '../assets/img/my_profile.png'

    const Chat = (props) => {
        const isQuestion = (props.type === "question");
        const classes = isQuestion? "p-chat__row" :"p-chat__reverse"
        return(
            <ListItem className = {classes}>
                <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src= {myImage}/>
                    ):(
                    <Avatar alt="icon" src= {noImage}/>
                )}
                </ListItemAvatar>
                <div className = "p-chat__bubble">
                    {props.text}
                </div>
            </ListItem>
        )
    }


export default Chat;