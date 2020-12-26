import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormText = (props)=>{
    return(
        <TextField
            fullWidth = {true}
            margin ={"dense"}
            label={props.label}
            multiline = {props.multiline}
            value = {props.value}
            rows = {props.rows}
            type ={props.type}
            onChange = {props.onChange}
        />
    )
}

export default FormText