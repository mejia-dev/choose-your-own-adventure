import React, { useEffect, useReducer, useState } from "react";
import { db, auth } from "../firebase.js";
import PlayerInput from './PlayerInput';
// import playerData from './PlayerData'
import Ship from "./Ship.js";
import Inventory from "./Inventory.js";
import { collection, getDocs, query, getDoc, setDoc, doc, where } from "firebase/firestore";
import IntroShipRendering from "./IntroShipRendering.js";
import { Link } from "react-router-dom";
// import { SavePlayerData } from "./LoadSave.js";
import EndGame from "./EndGame.js";
import './UIHolder.css';

export default function UIHolder() {

  let currentLevelRendered;

  const [dungeonList, setDungeonList] = useState([]);
  const [choicesList, setChoicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [gameReady, setGameReady] = useState(false);
  // const [, forceUpdate] = useReducer(x => x + 1, 0);
  // const [choiceMade, setChoiceMade] = useState(0);
  const [currentlyAboard, setCurrentlyAboard] = useState(false);
  const [cloudPlayerData, setCloudPlayerData] = useState({
    name:"",
    crew:"",
    location:"",
    inventory:[],
    shipsVisited:[]
  });

  // useEffect to get list of dungeons and choices from cloud, and conditionally get cloud player data if user is currently signed in.
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
      getCloudPlayerData();
    }
    getDungeonData();
    getChoicesData();
    setLoading(false);
  }, [])


  // Non-async functions for updating player data and screen
  function introSelectDungeon(dungeonID) {
    updateCloudPlayerLocation(dungeonID);
    setCurrentlyAboard(true);
  }

  function changeName(playerName) {
    updateCloudPlayerName(playerName);
  }


  // ASYNC Cloud Player Data Functions

  async function getCloudPlayerData() {
    const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    setCloudPlayerData(currentPlayerData.data())
  }

  async function updateCloudPlayerLocation(newLocationID) {
    setLoading(true);
    const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    const { name, crew, inventory, shipsVisited} = currentPlayerData.data();
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      name: name,
      crew: crew,
      location: newLocationID,
      inventory: inventory,
      shipsVisited: shipsVisited
    });
    getCloudPlayerData();
    setLoading(false);
  }

  async function updateCloudPlayerName(newNameString) {
    const { crew, location, inventory, shipsVisited} = cloudPlayerData;
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      name: newNameString,
      crew: crew,
      location: location,
      inventory: inventory,
      shipsVisited: shipsVisited
    });
    getCloudPlayerData();
  }

  async function updateCloudPlayerInventory(newItemString) {
    setLoading(true);
    const { name, crew, location, inventory, shipsVisited} = cloudPlayerData;
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      name: name,
      crew: crew,
      location: location,
      inventory: [...inventory, newItemString],
      shipsVisited: shipsVisited
    });
    getCloudPlayerData();
    setLoading(false);
  }

  async function updateCloudPlayerVisitedShips(shipIDToAdd) {
    setLoading(true);
    const { shipsVisited } = cloudPlayerData;
    const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      ...currentPlayerData.data(),
      shipsVisited: [...shipsVisited, shipIDToAdd]
    });
    getCloudPlayerData();
    setLoading(false);
  }

  async function updateCloudPlayerCrew(crewNameString) {
    const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
    await setDoc(doc(db, "userSaves", auth.currentUser.email), {
      ...currentPlayerData.data(),
      crew: crewNameString
    });
    getCloudPlayerData();
  }


  // Rendering of currentLevelRendered:

  if (auth.currentUser != null && cloudPlayerData.inventory.length > 2 && !loading) {
    currentLevelRendered = (
      <EndGame 
        playerData={cloudPlayerData}
      />
    )
  } else if (loading) { 
    console.log("IF6 LOADING")
    currentLevelRendered = (
      <React.Fragment>
        <h3 className="loading">LOADING!</h3>
      </React.Fragment>
    )
  } else if (cloudPlayerData.location == "" && !loading && auth.currentUser != null && cloudPlayerData.name != null) {
    console.log("IF2")
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
    console.log("IF3")
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
          doInventoryUpdate={updateCloudPlayerInventory}
          doShipListUpdate={updateCloudPlayerVisitedShips}
        />
        <div className="inventory">
          <Inventory 
            inventoryData={cloudPlayerData.inventory}
          />
        </div>
      </>
    )
  } else if (cloudPlayerData.location != "" && currentlyAboard === false && cloudPlayerData.inventory.length < 3) {
    console.log("IF4")
    const availableDungeons = dungeonList.filter((dungeon) => !cloudPlayerData.shipsVisited.includes(dungeon.id));
    currentLevelRendered = (
      <>
      <div className="ship-select">
        <h2>Choose A New Vessel</h2>
        <p><em>Ahoy, me hearty <b>Captain {cloudPlayerData.name}</b>! Set yer sights on a new vessel, and pick another ship to plunder from the list below!</em></p>
        <IntroShipRendering
          fullDungeonList={availableDungeons}
          selectionFunction={introSelectDungeon} />
      </div>
        <div className="inventory">
          <Inventory 
            inventoryData={cloudPlayerData.inventory}
          />
        </div>
      </>
    )
  } else if (cloudPlayerData.name == "" && !loading && auth.currentUser) {
    currentLevelRendered = (<>
      <PlayerInput
        commitName={changeName} 
        commitCrew={updateCloudPlayerCrew}
        />
    </>
    )
  } else {
    console.log("ERROR! Hit ELSE")
    currentLevelRendered = (
      <React.Fragment>
        <h3 className="no-info">Arr, how be ye standin' on this deck? There be naught but emptiness here!</h3>
        <p>Error</p>
      </React.Fragment>
    )
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <div className="no-auth">
          <h1>Avast ye!</h1>
          <p>Ye haven't hoisted yer colors yet! Sign in, or prepare to walk the plank, ye scallywag!</p>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment >
        {currentLevelRendered}
      </React.Fragment>
    )
  }
}