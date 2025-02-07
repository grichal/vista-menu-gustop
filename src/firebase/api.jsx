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
const ensaladasCollection = "ensaladas";
const panesCollection = "panes";
const promosCollection = "promos";
const proteinasCollection = "proteinas";
const wrapsCollection = "wraps";

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
export const getEnsaladas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, ensaladasCollection));
    const ensaladas = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.id,
      ...doc.data(),
    }));
    return ensaladas;
  } catch (error) {
    console.error("error while fetching sandwiches", error);
    throw error;
  }
};
export const getPanes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, panesCollection));
    const panes = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.id,
      ...doc.data(),
    }));
    return panes;
  } catch (error) {
    console.error("error while fetching sandwiches", error);
    throw error;
  }
};
export const getPromos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, promosCollection));
    const promos = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.id,
      ...doc.data(),
    }));
    return promos;
  } catch (error) {
    console.error("error while fetching sandwiches", error);
    throw error;
  }
};
export const getProteinas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, proteinasCollection));
    const proteinas = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.id,
      ...doc.data(),
    }));
    return proteinas;
  } catch (error) {
    console.error("error while fetching sandwiches", error);
    throw error;
  }
};
export const getWraps = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, wrapsCollection));
    const wraps = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.id,
      ...doc.data(),
    }));
    return wraps;
  } catch (error) {
    console.error("error while fetching sandwiches", error);
    throw error;
  }
};
