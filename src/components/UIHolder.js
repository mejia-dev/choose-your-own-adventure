import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import { db, auth } from "../firebase.js";
import PlayerInput from './PlayerInput';
import playerData from './PlayerData'
import { collection, getDocs, where, query } from "firebase/firestore";
import TestRendering from "./IntroShipRendering.js";
import IntroShipRendering from "./IntroShipRendering.js";
import { Link } from "react-router-dom"

export default function UIHolder() {

  let currentLevelRendered;

  const [dungeonList, setDungeonList] = useState([])
  const [choicesList, setChoicesList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDungeonData() {
      const q = query(collection(db, "dungeon"));
      const querySnapshot = await getDocs(q);
      setDungeonList([])
      querySnapshot.forEach((doc) => {
        setDungeonList((prevList) => [...prevList, doc.data()])
      });
    }
    async function getChoicesData() {
      const q = query(collection(db, "choices"));
      const querySnapshot = await getDocs(q);
      const choicesss = [];
      querySnapshot.forEach((doc) => {
        choicesss.push({
          buttonText: doc.data().buttonText,
          id: doc.data().id,
          resultText: doc.data().resultText,
          text: doc.data().text
        })

        setChoicesList(choicesss)
      });
    }
    getDungeonData();
    getChoicesData();
    setLoading(false);
  }, [])

  function introSelectDungeon(dungeonID) {
    playerData.location = dungeonID;
  }

  if (playerData.location == "" && !loading && auth.currentUser != null) {
    currentLevelRendered = (
      <React.Fragment>
        <h2>Ready yer sails for a plunder of secrets, mateys!</h2>
        <p>As you stand upon the weathered deck of your trusted vessel, the salty breeze tousles your hair, carryin' whispers of distant shores and treasures yet unfound. Ye're not just any sailor; ye're Captain {playerData.name}, a bold soul navigatin' the boundless open sea.
        <br /><br />
        The horizon stretches wide, adorned with a fleet of ships—each a chapter in yer tale. The <b>'Bumbling Barnacle'</b> beckons with its peculiar companionship, the <b>'Groggy Galleon'</b> hints at rowdy revelry, while the <b>'Jolly Jellyfish'</b> calls to ye with its enchantin' festivities. Yer path weaves through these storied vessels, and every decision ye make charts a course to wealth, companionship, or daring escapades across the high seas.
        <br /><br />
        Amidst whispers carried by the winds, tales of grandeur and fortune beckon. Here, each choice molds the voyage. Now, which ship shall be your first port of call?</p>
        {/*   */}
        <hr />
        <IntroShipRendering
          fullDungeonList={dungeonList}
          selectionFunction={introSelectDungeon}
        />
      </React.Fragment>
    )
  } else {
    currentLevelRendered = (
      <React.Fragment>
        <h2>Not signed in!</h2>
      </React.Fragment>
    )
  }
  //else {

  // currentLevelData = Object.values(dungeonList).filter((dungeon) => dungeon.id === playerData.location)[0];
  // let currentLevelChoiceAData;
  // // = choicesList.filter((choice) => choice.id === currentLevelData.choiceArray[0]);
  // let currentLevelChoiceBData;
  // // = choicesList.filter((choice) => choice.id === currentLevelData.choiceArray[1]);

  // currentLevelRendered = (
  //   <React.Fragment>
  //     <h2>Current Ship {currentLevelData.name}</h2>
  //     <p>{currentLevelData.storyText}</p>
  //     <div id="choiceA">
  //       <h3>{currentLevelChoiceAData.text}</h3>
  //       <button onClick="showChoiceAResult">{currentLevelChoiceAData.buttonText}</button>
  //       <p className="hidden">{currentLevelChoiceAData.resultText}</p>
  //       <button onClick="nextShip">Proceed</button>
  //     </div>
  //     <div id="choiceB">
  //       <h3>{currentLevelChoiceBData.text}</h3>
  //       <button onClick="showChoiceBResult">{currentLevelChoiceBData.buttonText}</button>
  //       <p className="hidden">{currentLevelChoiceBData.resultText}</p>
  //       <button onClick="nextShip">Proceed</button>
  //     </div>
  //   </React.Fragment>
  // )
  // }
  // }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Please Sign In</h1>
        <Link to="/sign-in">Sign In</Link>

      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment>
        {currentLevelRendered}
      </React.Fragment>
    )
  }
}