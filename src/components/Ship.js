import React, { useState } from "react";
import PropTypes from "prop-types";
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from './../firebase.js';
import playerData from "./PlayerData.js";

export default function Ship(props) {
  const styleHidden = {
    display: "hidden"
  }

  const [button1Style, setButton1Style] = useState({});
  const [button2Style, setButton2Style] = useState({});
  const [resultTextStyle, setResultTextStyle] = useState(styleHidden);
  const [resultText, setResultText] = useState(null);
  const [lootedItemDisplay, setLootedItemDisplay] = useState(null);
  const [exitShipDisplay, setExitShipDisplay] = useState(null);

  let currentView;

  if (!resultText) {
    currentView = (
      <>
        <div style={button1Style}><button onClick={() => result1()}>{props.selectedChoices[0].buttonText}</button></div>
        <div style={button2Style}><button onClick={() => result2()}>{props.selectedChoices[1].buttonText}</button></div>
      </>
    )
  } else {
    currentView = (
      <>
        <h2>Test</h2>
      </>
    )
  }

  function exitShip() {
    playerData.inventory.push(props.selectedShip);
    props.changeAboardStatus(false);
  }

  async function getLootedItem(lootID) {
    const q = query(collection(db, "loot"), where("id", "==", lootID));
    const querySnapshot = await getDocs(q);
    setLootedItemDisplay(null)
    querySnapshot.forEach((doc) => {
      playerData.inventory.push(doc.data());
      setLootedItemDisplay(
        <>
          <h4>{doc.data().type}</h4>
          <p>{doc.data().obtainText}</p>
          <p>{doc.data().itemDescription}</p>
        </>
      )
    });
    console.log(playerData.inventory)
  }

  

  function result1() {
    setResultText(props.selectedChoices[0].resultText)
    setButton2Style(styleHidden);
    setResultTextStyle(null);
    getLootedItem(props.selectedChoices[0].loot);
    setExitShipDisplay(<button onClick={exitShip}>Exit Ship</button>);
  }

  function result2() {
    setResultText(props.selectedChoices[1].resultText)
    setButton1Style(styleHidden);
    setResultTextStyle(null);
    getLootedItem(props.selectedChoices[1].loot);
    setExitShipDisplay(<button onClick={exitShip}>Exit Ship</button>);
  }


  return (
    <>
      <h2>You've <b>arr</b>ived aboard the {props.selectedShip.name}</h2>
      <p>{props.selectedShip.storyText}</p>
      {currentView}
      <div style={resultTextStyle}>
        {resultText}
        <br /><br />
        {lootedItemDisplay}
        {exitShipDisplay}
      </div>
    </>
  )
}

Ship.propTypes = {
  selectedShip: PropTypes.object,
  selectedChoices: PropTypes.array,
  changeAboardStatus: PropTypes.func
}



