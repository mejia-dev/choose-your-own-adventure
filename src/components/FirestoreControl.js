import React from "react";
import { dungeonData, choiceData, lootData } from "./RawDungeonData";
import { db } from "../firebase.js";
import { collection, addDoc, setDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";

export default function FireStoreControl() {

  const resetDefaultData = async () => {

    dungeonData.forEach(async(object) => {
        await setDoc(doc(db, "dungeon", object.id), object);
      
    })

    choiceData.forEach(async(object) => {
        await setDoc(doc(db, "choices", object.id), object);
      
    })

    lootData.forEach(async(object) => {
        await setDoc(doc(db, "loot", object.id), object);
      
    })
  }

  const testDataGenerator = async () => {
    await setDoc(doc(db,"testCollection", "id"), { "test": "This is a test!"});
  }

  return (
    <React.Fragment>
        <button onClick={() => resetDefaultData()}>Reset</button>
    </React.Fragment>
  )

}