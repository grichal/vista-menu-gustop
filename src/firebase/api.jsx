import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
  import db from "./config";

const sandwichCollection = "sandwiches";


export const getSandwiches = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, sandwichCollection));
      const sandwiches = querySnapshot.docs.map((doc) => ({
        key: doc.id,
        id: doc.id,
        ...doc.data(),
      }));
      return sandwiches;
    } catch (error) {
      console.error("error while fetching sandwiches", error);
      throw error;
    }
  };