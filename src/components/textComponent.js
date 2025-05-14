import React from "react";

class TextComponent extends React.Component {
    render() {
        const { result, text } = this.props;
        const maxLength = Math.max(result.length, text.length);
        return (
            <div>
                <div className="quest-container">
                    <div className="quest-text">
                        <h1 className="text">
                            {Array.from({ length: maxLength }).map((_, index, char) => {
                                let Color = "";
                                let displayText = "";

                                const resultChar = result[index] || "";
                                const textChar = text[index] || "";
                                if (index < text.length) {
                                    displayText = textChar;
                                    Color = resultChar
                                        ? (resultChar === textChar ? "lightgreen" : "lightcoral")
                                        : "";
                                }
                                else {
                                    Color = "lightgray";
                                    displayText = resultChar;
                                }
                                return (
                                    <span key={index} style={{ background: Color }}>
                                        {displayText}
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