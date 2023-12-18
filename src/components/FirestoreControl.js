import { dungeonData, choiceData, enemiesData, lootData } from "./RawDungeonData";
import db from "../firebase.js";
import { collection, addDoc, setDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";

function FireStoreControl() {

  const resetDataToDefault = async () => {
    onSnapshot(collection(db, "dungeon"),
      (collectionSnapshot) => {
        collectionSnapshot.forEach(async(doc) => {
          // find doc by id
          // if doc in collection already matches related doc in RawDungeonData, do not update
          // if doc does not match, update
          if (doc != dungeonData[doc.id]) {
            await setDoc(doc(db, "dungeon", doc.id), dungeonData[doc.id]);
          }
        })
      },
      (error) => {
        console.log(error.message);
      }
    )
    onSnapshot(collection(db, "choices"),
      (collectionSnapshot) => {
        collectionSnapshot.forEach(async(doc) => {
          if (doc != choiceData[doc.id]) {
            await setDoc(doc(db, "choices", doc.id), choiceData[doc.id]);
          }
        })
      },
      (error) => {
        console.log(error.message);
      }
    )
    onSnapshot(collection(db, "enemies"),
      (collectionSnapshot) => {
        collectionSnapshot.forEach(async(doc) => {
          if (doc != enemiesData[doc.id]) {
            await setDoc(doc(db, "enemies", doc.id), enemiesData[doc.id]);
          }
        })
      },
      (error) => {
        console.log(error.message);
      }
    )
    onSnapshot(collection(db, "loot"),
      (collectionSnapshot) => {
        collectionSnapshot.forEach(async(doc) => {
          if (doc != lootData[doc.id]) {
            await setDoc(doc(db, "loot", doc.id), lootData[doc.id]);
          }
        })
      },
      (error) => {
        console.log(error.message);
      }
    )
  }

}