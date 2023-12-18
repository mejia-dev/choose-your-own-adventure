import { dungeonData, choiceData, enemiesData, lootData } from "./RawDungeonData";
import db from "../firebase.js";
import { collection, addDoc, setDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";