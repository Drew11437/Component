import React from "react";

const NameList = (props) => {
    let renderedNames = props.names.map((name) =>{
        return <li>{name}</li>;
    });
    return<div>{renderedNames}</div>;
    };
    export default NameList;