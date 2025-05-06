import React from "react";
class MyComponent extends React.Component {

    state = {
        result: ""
    }
    handleOnChangeResult = (event) => {
        this.setState({
            result: event.target.value,
        })
    }
    handleClickButton = () => {
        alert("READ");
    }
    render() {
        const text = "Hi, there is the test for typing app";
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
                <input type="text" value={this.state.result} onChange={(event) => this.handleOnChangeResult(event)} />
            </div>
        )
    }
}
export default MyComponent;