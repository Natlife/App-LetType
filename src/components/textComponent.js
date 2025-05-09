import React from "react";

class TextComponent extends React.Component {
    render() {
        const { result, text } = this.props;
        return (
            <div>
                <div className="quest-container">
                    <div className="quest-text">
                        <h1 className="text">
                            {text.split("").map((char, index) => {
                                let Color = "";
                                if (index < result.length) {
                                    result[index] === char ? Color = "lightgreen" : Color = "lightcoral";
                                }
                                return (
                                    <span key={index} style={{ background: Color }}>
                                        {char}
                                    </span>
                                );
                            })
                            }
                        </h1>
                    </div>
                </div>
                <div className="firework-container left" aria-hidden="true"></div>
                <div className="firework-container right" aria-hidden="true"></div>
                <div className="balloon-container" aria-hidden="true"></div>

            </div>
        )
    }
}
export default TextComponent;