import React from "react";

const PaddingElement = (props) => {
    const space = props.space * 10;
    const spaceString = "" + space;
    return (
        <div style={{ height: spaceString + "px" }}></div>
    );
}

export default PaddingElement;