import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Ship(props) {
  const styleHidden = {
    display: "hidden"
  }
  
  const [button1Style, setButton1Style] = useState({});
  const [button2Style, setButton2Style] = useState({});
  const [resultTextStyle, setResultTextStyle] = useState(styleHidden);
  
    let resultText;

    function result1() {
        resultText = props.selectedChoices[0].resultText;
        setButton2Style(styleHidden);
        setResultTextStyle(null);
        props.commitChoice()
    }

    function result2() {
        resultText = props.selectedChoices[1].resultText;
        setButton1Style(styleHidden);
        setResultTextStyle(null);
        props.commitChoice()
    }

    return(
        <>
            <h2>You've <b>arr</b>ived aboard the {props.selectedShip.name}</h2>
            <p>{props.selectedShip.storyText}</p>
            <div style={button1Style}><button onClick={() => result1()}>{props.selectedChoices[0].buttonText}</button></div>
            <div style={button2Style}><button onClick={() => result2()}>{props.selectedChoices[1].buttonText}</button></div>
            <p style={resultTextStyle}>{resultText}</p>
        </>
    )
}

Ship.propTypes = {
  selectedShip: PropTypes.object,
  selectedChoices: PropTypes.array,
  commitChoice: PropTypes.func
}