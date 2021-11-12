import React from "react";

const PaddingElement = (props) => {
    const space = props.space * 1.5;
    const spaceString = "" + space;
    return <div style={{ height: spaceString + "vh" }}></div>;
};

export default PaddingElement;
