import { Divider } from '@material-ui/core';
import React from 'react';
import {Answer} from './index'

const AnswersList=(props)=>{
    return(
        <div className = "c-grid__answer">
            {props.answers.map((answer,key)=>{
                return <Answer content = {answer.content} nextId ={answer.nextId} select = {props.select} key = {key.toString()} />
            })}
        </div>
    )
}

export default AnswersList;