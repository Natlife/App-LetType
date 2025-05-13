import React from "react";
import word from "../data/word.json";
import TextComponent from "./textComponent";

import CompletePopUpComponent from "./completePopUpComponent";
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
        this.setState({
            result: event.target.value,

        })
        if (this.state.StartTimeFlag === false) {
            this.setState({
                StartTime: Date.now(),
                StartTimeFlag: true
            })
        }
        if (this.state.result.length === this.state.text.length - 1) {
            // alert("You done great job!!!");
            toast(' 👑 You done great job!!! 🎉 🎉 🎉', {
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
                checkDoneTyping: !this.statecheckDoneTyping,
                StartTimeFlag: false
            })
            // this.handleClickButton(this.state.lengths);
        }
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
        this.setState({
            text: this.getRandomWord(word, total),
            result: "",
            ExactCount: 0,
            checkDoneTyping: false
        });
        // const inputEle = document.getElementById("input-script");
        // if (inputEle) {
        //     inputEle.focus();
        // }
        toast.success('Regeneration complete', {
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
        const inputEle = document.getElementById("input-script");
        inputEle.focus();
    };
    render() {

        window.addEventListener('keydown', (event) => {
            !this.state.checkDoneTyping &&
                this.handleKeyDown(event)


        });
        return (
            <div className="body-container">
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
                <input id="input-script" autoFocus type="text" value={this.state.result} onChange={(event) => this.handleOnChangeResult(event)} /><br />
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
            </div >
        )
    }
}
export default TypingComponent;