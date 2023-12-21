import React, { useState } from "react";
import PropTypes from "prop-types";
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from './../firebase.js';
import './Ship.css'

export default function Ship(props) {
  const [resultText, setResultText] = useState(null);
  const [lootedItemDisplay, setLootedItemDisplay] = useState(null);
  const [exitShipDisplay, setExitShipDisplay] = useState(null);
  let currentView;

  if (!resultText) {
    currentView = (
      <>
        <button onClick={() => onChoiceSelection(0)}>{props.selectedChoices[0].buttonText}</button>
        <button onClick={() => onChoiceSelection(1)}>{props.selectedChoices[1].buttonText}</button>
      </>
    )
  } else {
    currentView = (null)
  }

  async function getLootedItem(lootID) {
    const q = query(collection(db, "loot"), where("id", "==", lootID));
    const querySnapshot = await getDocs(q);
    setLootedItemDisplay(null)
    querySnapshot.forEach((doc) => {
      props.doInventoryUpdate(doc.data().type);
      setLootedItemDisplay(
        <>
          {/* <h4 className="h4">{doc.data().type}</h4> */}
          <h4 className="h4">{doc.data().obtainText}</h4>
          <p>{doc.data().itemDescription}</p>
        </>
      )
    });
  }

  function onChoiceSelection(choiceNumber) {
    setResultText(
      <>
        <h3 className="h4">You chose the {props.selectedChoices[choiceNumber].name}</h3>
        <p>{props.selectedChoices[choiceNumber].resultText}</p>
      </>
    );
    getLootedItem(props.selectedChoices[choiceNumber].loot);
    setExitShipDisplay(<button onClick={exitShip}>Exit Ship</button>);
  }

  function exitShip() {
    console.log("SHIP EXITED")
    props.doShipListUpdate(props.selectedShip.id);
    props.changeAboardStatus(false);
  }

  return (
    <>
      <div className="ship">
        <h2>You've <em>arr</em>ived aboard the {props.selectedShip.name}</h2>
        <p>{props.selectedShip.storyText}</p>
        {currentView}
      </div>
      <div>
        {resultText}
        {/* <br /><br /> */}
        {lootedItemDisplay}
        <div className="h4">
        {exitShipDisplay}
        </div>
      </div>
    </>
  )
}

Ship.propTypes = {
  selectedShip: PropTypes.object,
  selectedChoices: PropTypes.array,
  changeAboardStatus: PropTypes.func,
  doInventoryUpdate: PropTypes.func,
  doShipListUpdate: PropTypes.func
}



