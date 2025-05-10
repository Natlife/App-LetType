import React from "react";

class StatComponent extends React.Component {
    render() {
        return (
            <div>WPM= (text.length /5) / (CurrentTime - StartTime)</div>
            //StartTime = Date.now() when user start typing
            //CurrentTime = Date.now() when result.length === text.length - 1
        )
    }
}
export default StatComponent;