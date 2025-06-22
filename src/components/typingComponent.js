import React from "react";
import logo from "../assets/images/logo.png";


//text file
import englishWord from "../data/englishWord.json";
import htmlWord from "../data/htmlWord.json";
import vietnameseWord from "../data/vietnameseWord.json";
import javaWord from "../data/javaWord.json";

//components
import TextComponent from "./textComponent";
import CompletePopUpComponent from "./completePopUpComponent";


//libs
import { toast } from 'react-toastify';
class TypingComponent extends React.Component {

    state = {
        text: "Hi, there is the test for typing app",
        lengths: 10,
        result: "",
        language: "ENGLISH",
        ExactCount: 0,
        checkDoneTyping: false,
        StartTime: Date.now(),
        StartTimeFlag: false
    }
    handleOnChangeResult = (event) => {
        if (this.state.checkDoneTyping === true) {
            return;
        }
        if (this.state.StartTimeFlag === false) {
            this.setState({
                StartTime: Date.now(),
                StartTimeFlag: true
            })
        }
        this.setState({
            result: event.target.value,

        })
    }
    handleOnChangeLengths = (event) => {
        this.setState({
            lengths: Number(event.target.value)
        })
    }
    handleOnChangeLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    handleClickButton = (total) => {
        let language = [];
        switch (this.state.language) {
            case "ENGLISH":
                language = englishWord;
                break;
            case "VIETNAMESE":
                language = vietnameseWord;
                break;
            case "HTML":
                language = htmlWord;
                break;
            case "JAVA":
                language = javaWord;
                break;
            default:
                language = englishWord;
                break;
        }
        this.setState({
            text: this.getRandomWord(language, total),
            result: "",
            ExactCount: 0,
            checkDoneTyping: false
        });
        toast.success('Regeneration complete', {
            toastId: "regen-complete",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: "toast-complete"
        });
    }
    /*
    getRandomWord:
    arr: array of words from word.json
    total: the total length of the script
    use slice() to tranfer to new array and sort them random 
    then slice from 0 to total and return the script have total length
    */
    getRandomWord = (arr, total) => {
        let script = [];
        for (let i = 0; i < total; i++) {
            const val = Math.floor(Math.random() * (arr.length));
            script.push(arr[val]);
        }
        return script.join(" ");
    }
    handleKeyDown = (e) => {
        if (e.key !== "Enter") {
            const inputEle = document.getElementsByClassName("input-script")[0];
            if (inputEle) {
                inputEle.focus();
            }
        }
    };
    handleSpaceDown = (e) => {
        if (e.key === " ") {
            if (this.state.result.length >= this.state.text.length) {
                toast(' 👑 You done great job!!! 🎉 🎉 🎉', {
                    toastId: "done-typing",
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    className: "toast-complete"
                });
                this.setState({
                    checkDoneTyping: !this.state.checkDoneTyping,
                    StartTimeFlag: false
                })
                // this.handleClickButton(this.state.lengths);
                if (document.getElementsByClassName("input-script")[0]) {
                    document.getElementsByClassName("input-script")[0].blur();
                }
                return;
            }

        }
    }
    render() {

        window.addEventListener('keydown', (event) => {
            !this.state.checkDoneTyping &&
                this.handleKeyDown(event)


        });
        return (
            <div className="body-container">
                <img src={logo} className="App-logo" alt="logo" />
                <CompletePopUpComponent
                    lengths={this.state.lengths}
                    StartTime={this.state.StartTime}
                    Text={this.state.text}
                    Result={this.state.result}
                    handleClickButton={this.handleClickButton}
                    checkDoneTyping={this.state.checkDoneTyping}
                // getRandomWord={this.getRandomWord}
                />
                <TextComponent
                    text={this.state.text}
                    result={this.state.result}
                />
                <input className="input-script" type="text" value={this.state.result}

                    onChange={(event) => this.handleOnChangeResult(event)}
                    onKeyDown={this.handleSpaceDown} /><br />
                <div>
                    <select className="input-length" onChange={(event) => this.handleOnChangeLengths(event)}>
                        <option value="10">
                            10
                        </option>
                        <option value="20">
                            20
                        </option>
                        <option value="30">
                            30
                        </option>
                        <option value="50">
                            50
                        </option>
                    </select>


                    <select className="input-length" onChange={(event) => this.handleOnChangeLanguage(event)}>
                        <option value="ENGLISH">
                            English
                        </option>
                        <option value="VIETNAMESE">
                            Vietnamese
                        </option>
                        <option value="HTML">
                            Html
                        </option>
                        <option value="JAVA">
                            Java
                        </option>
                    </select>
                    <br />
                </div>
                <button className="but-regen" onClick={() => this.handleClickButton(this.state.lengths)}>Reload</button>
                <p className="note">#Space to submit the typing when the result equal or greater than the gen-text</p>
            </div >
        )
    }
}
export default TypingComponent;