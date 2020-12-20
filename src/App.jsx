import React from "react";
import './App.css';
import { Divider } from '@material-ui/core';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from "./components/index";



export default class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      answers:[],
      chats:[],
      currentId:"init",
      dataset:defaultDataset,
      open: false
    }
  }

  initAnswer = () => {
    //defaultDatasetの連想配列の中にあるcurrentIdをブラケット構文で取り出している
    const initDataset = this.state.dataset[this.state.currentId]
    //したの定数はどっちでも定義できる
    //const initAnswers = initDataset[answers]  //ブラケット構文
    const initAnswers = initDataset.answers　   //ドット構文
    this.setState({
      answers:initAnswers
    })
  }

  componentDidMount=()=>{
    this.initAnswer()
  }

  render (){
    return (
      <section className = "c-section">
        <div className = "c-box">
          <AnswersList
            answers = {this.state.answers}
          />
        </div>
      </section>
    );
  }
}
