import React from 'react';
import { makeStyles , createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { bgcolor } from '@material-ui/system';

//material-uiのカスタマイズのため
//useStyle関数でmakeStylesを読んでmakeStylesでcreateStylesを読んでいる
//つまりuseStylesを呼べばbottomの廃りるが当たる
const useStyles = makeStyles(() => (
    createStyles({
        "bottom": {
            backgroundColor:"#d7dddd",
            color:"#7c8080",
            fontWeight:600,
            marginBottom:"10px",
            "&:hover":{
                backgroundColor:"#a0b3bc",
                color:"#69757a",
            }
        }
    })
));
const Answer = (props)=>{
    //上でuseStylesを呼べばbottomのスタイルが当たるようになった
    //それをclassesに入れてスタイルを当てていく
    const classes = useStyles();

    return(
        <>
            <Button
                className = {classes.bottom}
                variant="contained" onClick = {()=> props.select(props.content,props.nextId)}>
                {props.content}
            </Button>
        </>
    )
}
export default Answer;