import {db, auth} from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"

export async function LoadPlayerData() {
  const currentPlayerData = await getDoc(doc(db, "userSaves", auth.currentUser));
  return currentPlayerData.data();
}

export async function SavePlayerData(playerDataObject) {
  await setDoc(doc(db, "userSaves", auth.currentUser), playerDataObject);
}