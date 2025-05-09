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
                <CongratComponent
                    checkDoneTyping={this.props.checkDoneTyping}
                />
                {this.props.checkDoneTyping &&
                    <>
                        <div className="popup-back"
                            onClick={() => this.props.handleClickButton(this.props.lengths)}
                        >
                            <div className="notify-container"><h2>Enter to continue</h2></div>
                        </div>
                    </>
                }
            </div>
        )
    }
}
export default CompletePopUpComponent;