import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase.js";
import PlayerInput from './PlayerInput';
import playerData from './PlayerData'
import Ship from "./Ship.js";
import Inventory from "./Inventory.js";
import { collection, getDocs, query, getDoc, setDoc, doc, where } from "firebase/firestore";
import IntroShipRendering from "./IntroShipRendering.js";
import { Link } from "react-router-dom";
import { SavePlayerData } from "./LoadSave.js";
import EndGame from "./EndGame.js";
import './UIHolder.css';

export default function UIHolder() {

  let currentLevelRendered;

  const [dungeonList, setDungeonList] = useState([]);
  const [choicesList, setChoicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameReady, setGameReady] = useState(false);
  const [choiceMade, setChoiceMade] = useState(0);
  const [currentlyAboard, setCurrentlyAboard] = useState(false);
  const [cloudPlayerData, setCloudPlayerData] = useState({
    name:"",
    crew:"",
    location:"",
    inventory:[],
    shipsVisited:[]
  });

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
      setChoicesList([])
      querySnapshot.forEach((doc) => {
        setChoicesList((prevList) => [...prevList, doc.data()])
      });
    }
    if (auth.currentUser) {
      async function getCloudPlayerData() {
        const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
        // setChoicesList([])
        // currentPlayerData.forEach((doc) => {
        //   console.log(doc.data())
        // });
        setCloudPlayerData(currentPlayerData.data())
      }
      getCloudPlayerData();
    }
    
    getDungeonData();
    getChoicesData();
    
    setLoading(false);
  }, [])

  function introSelectDungeon(dungeonID) {
    playerData.location = dungeonID;
    updateCloudPlayerLocation(dungeonID);
    setChoiceMade(choiceMade + 1)
    setCurrentlyAboard(true);
  }

  function changeName(playerName) {
    playerData.name = playerName;
    updateCloudPlayerName(playerName);
    setGameReady(true)
  }

  

  async function updateCloudPlayerLocation(newLocation) {
    const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    const { name, crew, inventory, shipsVisited} = currentPlayerData.data();
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      name: name,
      crew: crew,
      location: newLocation,
      inventory: inventory,
      shipsVisited: shipsVisited
    });
  }

  async function updateCloudPlayerName(newName) {
    // const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    const { crew, location, inventory, shipsVisited} = cloudPlayerData;
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      name: newName,
      crew: crew,
      location: location,
      inventory: inventory,
      shipsVisited: shipsVisited
    });
  }

  if (playerData.name == "") {
    currentLevelRendered = (<>
      <PlayerInput
        commitName={changeName} />
    </>
    )
  } else if (playerData.location == "" && !loading && auth.currentUser != null && playerData.name != null) {
    currentLevelRendered = (
      <React.Fragment>
        <div className="intro-container">
          <h2>Ready yer sails for a plunder of secrets, mateys!</h2>
          <p>As you stand upon the weathered deck of your trusted vessel, the salty breeze tousles your hair, carryin' whispers of distant shores and treasures yet unfound. Ye're not just any sailor; ye're <b>Captain {cloudPlayerData.name}</b>, a bold soul navigatin' the boundless open sea.
            <br /><br />
            The horizon stretches wide, adorned with a fleet of ships—each a chapter in yer tale. The <b>'Bumbling Barnacle'</b> beckons with its peculiar companionship, the <b>'Groggy Galleon'</b> hints at rowdy revelry, while the <b>'Jolly Jellyfish'</b> calls to ye with its enchantin' festivities. Yer path weaves through these storied vessels, and every decision ye make charts a course to wealth, companionship, or daring escapades across the high seas.
            <br /><br />
            Amidst whispers carried by the winds, tales of grandeur and fortune beckon. Here, each choice molds the voyage. Now, which ship shall be your first port of call?</p>
        
          <hr />
          <IntroShipRendering
            fullDungeonList={dungeonList}
            selectionFunction={introSelectDungeon} />
        </div>
      </React.Fragment>
    )
  } else if (cloudPlayerData.location != "" && currentlyAboard === true) {

    const selectedDungeon = dungeonList.find((dungeon) => dungeon.id === cloudPlayerData.location);
    let choiceOptions = [];
    choicesList.forEach((choice) => {
      if (selectedDungeon.choiceArray.includes(choice.id)) {
        choiceOptions.push(choice)
      }
    })

    currentLevelRendered = (
      <>
        <Ship
          selectedShip={selectedDungeon}
          selectedChoices={choiceOptions}
          changeAboardStatus={setCurrentlyAboard}
        />
      </>
    )
  } else if (cloudPlayerData.location != "" && currentlyAboard === false && playerData.inventory.length < 3) {
    const availableDungeons = dungeonList.filter((dungeon) => !playerData.shipsVisited.includes(dungeon.id));
    SavePlayerData();
    // SavePlayerData("testData");
    currentLevelRendered = (
      <>
      <div className="ship-select">
      <h2>Choose A New Vessel</h2>
      <p>Ahoy, me hearty <b>Captain {playerData.name}</b>! Set yer sights on a new vessel, and pick another ship to plunder from the list below!</p>
      <IntroShipRendering
          fullDungeonList={availableDungeons}
          selectionFunction={introSelectDungeon}
        />
        </div>
      </>
    )
  } else if (playerData.inventory.length > 2) {
    SavePlayerData();
    currentLevelRendered = (
      <EndGame />
    )
  } else {
    currentLevelRendered = (
      <React.Fragment>
        <h3>Arr, how be ye standin' on this deck? There be naught but emptiness here!</h3>
      </React.Fragment>
    )
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Avast ye!</h1>
        <p>Ye haven't hoisted yer colors yet! Sign in, or prepare to walk the plank, ye scallywag!</p>
        <Link to="/sign-in">Sign In</Link>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment >
        {currentLevelRendered}
        <div className="inventory">
          <Inventory />
        </div>
      </React.Fragment>
    )
  }
}