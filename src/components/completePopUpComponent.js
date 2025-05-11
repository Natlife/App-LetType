import React from "react";
import CongratComponent from "./congratComponent";
import '../styles/popUp.scss';

class CompletePopUpComponent extends React.Component {
    handleKeyDown = (event) => {
        if (event.key !== "Enter") {
            return;
        }
        this.props.handleClickButton(this.props.lengths);
    }
    render() {
        window.addEventListener('keydown', (event) => {
            this.props.checkDoneTyping &&
                this.handleKeyDown(event)


        });
        return (

            <div>
                {/* <CongratComponent
                    checkDoneTyping={this.props.checkDoneTyping}
                /> */}
                {this.props.checkDoneTyping &&
                    <>
                        <div className="popup-back"
                            onClick={() => this.props.handleClickButton(this.props.lengths)}
                        >
                            <div className="notify-stat">
                                <div className="stat-container"><span className="stat-title">WPM:</span>  <span className="stat-value">100</span></div>
                                <div className="stat-container"><span className="stat-title">ACC:</span>  <span className="stat-value">100%</span></div>
                                <div className="stat-container"><span className="stat-title">Time:</span> <span className="stat-value">10:00</span></div>
                            </div>
                            <div className="notify-container"><div className="notify-continue">Enter to continue</div></div>
                            <div className="notify-stat"></div>
                        </div>
                    </>
                }
            </div>
        )
    }
}
export default CompletePopUpComponent;