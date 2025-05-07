import React from "react";
import word from "../../data/word.json";
class MyComponent extends React.Component {

    state = {
        text: "Hi, there is the test for typing app",
        lengths: 10,
        result: ""
    }
    handleOnChangeResult = (event) => {
        this.setState({
            result: event.target.value,

        })
        if (this.state.result.length === this.state.text.length - 1) {
            alert("You done great job!!!");
            this.handleClickButton(this.state.lengths);
        }
    }
    handleOnChangeLengths = (event) => {
        this.setState({
            lengths: Number(event.target.value)
        })
    }
    handleClickButton = (total) => {
        this.setState({
            text: this.getRandomWord(word, total),
            result: ""
        })
        const inputEle = document.getElementById("input-script");
        if (inputEle) {
            inputEle.focus();
        }
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
        const text = this.state.text;
        const { result } = this.state;
        const chars = text.split("").map((char, index) => {
            let Color = "";
            if (index < result.length) {
                if (result[index] === char) {
                    Color = "lightgreen";
                } else {
                    Color = "lightcoral";
                }
            }
            return (
                <span key={index} style={{ backgroundColor: Color }}>
                    {char}
                </span>
            );
        });
        window.addEventListener('keydown', (event) => this.handleKeyDown(event));
        return (
            <div>
                <div id="quest">
                    <h1 className="exam" style={{ fontSize: "1.5rem", lineHeight: "1.4", userSelect: "none" }}>{chars}</h1>
                </div>
                <br />
                <input id="input-script" autoFocus type="text" value={this.state.result} onChange={(event) => this.handleOnChangeResult(event)} /><br />
                <select id="input-length" onChange={(event) => this.handleOnChangeLengths(event)}>
                    <option value="10">
                        10
                    </option>
                    <option value="15">
                        15
                    </option>
                    <option value="20">
                        20
                    </option>
                    <option value="30">
                        30
                    </option>
                    <option value="40">
                        40
                    </option>
                    <option value="50">
                        50
                    </option>
                </select><br />
                <button id="but-regen" onClick={() => this.handleClickButton(this.state.lengths)}>Reload</button>
            </div >
        )
    }
}
export default MyComponent;