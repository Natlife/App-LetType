import React from "react";
import CongratComponent from "./congratComponent";
import StatComponent from "./statComponent";

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
                            <StatComponent
                                StartTime={this.props.StartTime}
                                Text={this.props.Text}
                                Result={this.props.Result}
                            />
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