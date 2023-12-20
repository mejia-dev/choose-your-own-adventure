import {db, auth} from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"
import playerData from "./PlayerData";

export async function LoadPlayerData() {
  const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser));
  playerData = currentPlayerData;
  console.log(playerData);
  // console.log(currentPlayerData)
  // return currentPlayerData.data();
}

export async function SavePlayerData() {
  await setDoc(doc(db, "userSaves", auth.currentUser.email), playerData);
}