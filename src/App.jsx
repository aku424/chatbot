import React from "react";
import './App.css';
import { Divider } from '@material-ui/core';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from "./components/index";



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
    //コールバック関数をpropsとして渡す場合はbindが必要
    //bindをしないとレンダリングされるたびみ毎回毎回関数が作られる
    //でもbindしておけば関数を一度呼び出したら再利用できるからパフォーマンス向上につながる。
    this.selectAnswer = this.selectAnswer.bind(this)
  }
  //次の質問を呼び出す関数
  displayNextQuestion = (nextQuestionId)=>{
        //chatsステイトのコピーのようなもの
        const chats = this.state.chats
        //コピーのchatsステイトにtextとtypeを渡す
        //typeには次に表示する質問ID（nextQuestionId）のquestionが入る
        //typeには質問を表示するのでquestionをいれる
        chats.push({
        text:this.state.dataset[nextQuestionId].question,
        type:"question"
      })
      //最初に、次の回答の候補をdatasetから探していれる。
      //次に、上で入れた情報を、setStateを使って本物のstateにコピーのstateを導入する。
      //最後に次の質問のID(nextQuestionId)をいれる
      this.setState({
        answers:this.state.dataset[nextQuestionId].answers,
        chats:chats,
        currentId:nextQuestionId
      })
  }
  
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        //chatsステイトのコピーのようなもの
        const chats = this.state.chats
        //コピーのchatsステイトにtextとtypeを渡す
        //selectedAnswerはOOOO
        //answerをいれるのは回答（userが選ぶ側）ということ
        chats.push({
          text :selectedAnswer,
          type : "answer"
        })
        this.setState({
          // 本物のchatsにコピーのchatsを入れ込んでいる。
          chats:chats
        })

        //最後に次の質問を表示させる感酢を呼び出す
        this.displayNextQuestion(nextQuestionId);
        break;
    }
  }
  componentDidMount=()=>{
    this.initAnswer = ""
    //selectedAnswerが空っぽで次の質問は初期状態という引数
    //つまり、初期状態
    this.selectAnswer(this.initAnswer, this.state.currentId)
  }

  // initAnswer = () => {
  //   //defaultDatasetの連想配列の中にあるcurrentIdをブラケット構文で取り出している
  //   const initDataset = this.state.dataset[this.state.currentId]
  //   //したの定数はどっちでも定義できる
  //   //const initAnswers = initDataset[answers]  //ブラケット構文
  //   const initAnswers = initDataset.answers　   //ドット構文
  //   this.setState({
  //     answers:initAnswers
  //   })
  // }
  
  // initChats = () => {
  //   //defaultDatasetの連想配列の中にあるcurrentIdをブラケット構文で取り出している
  //   const initDataset = this.state.dataset[this.state.currentId]
  //   const Chat = {
  //     text :initDataset.question,
  //     type : "question"
  //   }
  //   //chatsステイトのコピーのようなもの
  //   const chats = this.state.chats
  //   chats.push(Chat)
  //   this.setState({
  //     // 本物のchatsにコピーのchatsを入れ込んでいる。
  //     chats:chats
  //   })
  // }

  render (){
    return (
      <section className = "c-section">
        <div className = "c-box">
          <Chats chats = {this.state.chats}/>
          <AnswersList
            answers = {this.state.answers}
            select ={this.selectAnswer}
          />
        </div>
      </section>
    );
  }
}
