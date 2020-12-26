import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormText from './FormText';

export default class FormDialog extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            name : "",
            email : "",
            description : ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)
    }
    //したの３つはstateの更新をしている。
    //１文字入れるたびにstateが更新される
    //logをみてみればわかる
    inputName = (event) =>{
        // console.log(event.target.value);
        this.setState({
            name:event.target.value
        })
    }
    inputEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    inputDescription = (event) =>{
        this.setState({
            description:event.target.value
        })
    }
    submitForm=()=>{
        //入力してくれた情報を定数化
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description
        const url = "https://hooks.slack.com/services/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";
        //slackに通知を送る
        const payload = {
            text: 'お問い合わせがありました\n'+
                'お名前：' + name + '\n' +
                'メールアドレス：'　+ email + '\n' +
                'お問い合わせ内容：\n'　+ description
        }
        fetch (url, {
            method :"POST",
            body :JSON.stringify(payload)
        }).then(()=>{
            alert('お問い合わせ完了しました。'+'\n'+
            'ご入力していただいたメールアドレス宛にご連絡いたします。'+'\n'+
            '少々お待ちください');
            this.setState({
                name: "",
                email: "",
                description: ""
            });
            return this.props.handleClickClose();
        });
    };
    render(){
        return(
            <Dialog
            //なぜthisが必要のか
                open={this.props.open}
                onClose={this.props.handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">お問い合わせ</DialogTitle>
                <DialogContent>
                    <FormText
                        multiline = {false}
                        rows = {1}
                        type = {"text"}
                        label = {"お名前（必須）"}
                        onChange = {this.inputName}
                        value = {this.state.name}
                    />
                    <FormText
                        multiline = {false}
                        rows = {1}
                        type = {"email"}
                        label = {"メールアドレス（必須）"}
                        onChange = {this.inputEmail}
                        value = {this.state.email}
                    />
                    <FormText
                        multiline = {true}
                        rows = {5}
                        type = {"text"}
                        label = {"お問い合わせ内容（必須）"}
                        onChange = {this.inputDescription}
                        value = {this.state.description}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.props.handleClickClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={this.submitForm} color="primary" autoFocus>
                    送信
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}