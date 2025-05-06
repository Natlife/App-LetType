import React from "react";
import word from "../../data/word.json";
class MyComponent extends React.Component {

    state = {
        text: "Hi, there is the test for typing app",
        result: ""
    }
    handleOnChangeResult = (event) => {
        this.setState({
            result: event.target.value,

        })
        if (this.state.result.length === this.state.text.length - 1) {
            alert("You done great job!!!");
            this.handleClickButton(10);
        }
    }
    handleClickButton = (total) => {
        this.setState({
            text: this.getRandomWord(word, total),
            result: ""
        })
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

        return (
            <div>
                <h1 className="exam" style={{ fontSize: "1.5rem", lineHeight: "1.4", userSelect: "none" }}>{chars}</h1>
                <br />
                <input type="text" value={this.state.result} onChange={(event) => this.handleOnChangeResult(event)} /><br />
                <button onClick={() => this.handleClickButton(10)}>Reload</button>
            </div >
        )
    }
}
export default MyComponent;