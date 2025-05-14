import React from "react";

class StatComponent extends React.Component {

    handleCalWPM = (StartTime, Text) => {
        let CurrentTime = Date.now();
        return (
            Math.round((Text.length / 5) / ((CurrentTime - StartTime) / 1000 / 60))
        )
    }
    handleCalExactRate = (Text, Result) => {
        let ExactCount = 0;
        let maxLength = Math.max(Result.length, Text.length);
        for (let i = 0; i < Text.length; i++) {
            if (Text[i] === Result[i]) {
                ExactCount++;
            }
        }
        return (
            (ExactCount / maxLength * 100).toFixed(1)
        )
    }
    handleCalTimeTyping = (StartTime) => {
        let CurrentTime = Date.now();
        return (
            Math.round((CurrentTime - StartTime) / 1000 / 60) + ":" + Math.round((CurrentTime - StartTime) / 1000)
        )
    }
    render() {
        let { StartTime, Text, Result } = this.props;

        return (
            // <div>WPM= (text.length /5) / (CurrentTime - StartTime)</div>
            //StartTime = Date.now() when user start typing
            //CurrentTime = Date.now() when result.length === text.length - 1

            <div className="notify-stat">
                <div className="stat-container">
                    <span className="stat-title">WPM:</span>
                    <span className="stat-value">{this.handleCalWPM(StartTime, Text)}</span></div>
                <div className="stat-container">
                    <span className="stat-title">ACC:</span>
                    <span className="stat-value">{this.handleCalExactRate(Text, Result)}%</span></div>
                <div className="stat-container">
                    <span className="stat-title">Time:</span>
                    <span className="stat-value">{this.handleCalTimeTyping(StartTime)}</span></div>
            </div>

        )
    }
}
export default StatComponent;