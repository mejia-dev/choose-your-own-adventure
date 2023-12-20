import {db, auth} from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"
import playerData from "./PlayerData";

export async function LoadPlayerData() {
  const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser.email));
  const { name, location, inventory, shipsVisited} = currentPlayerData.data();
  playerData.name  = name
  playerData.location = location;
  playerData.inventory = inventory;
  playerData.shipsVisited = shipsVisited;
}

export async function SavePlayerData() {
  await setDoc(doc(db, "userSaves", auth.currentUser.email), playerData);
}