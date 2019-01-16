import { firebase } from '../../config/index';

const db = firebase.firestore();
const api = {};

api.getMenuItems = async () => {
  const menuData = await db
    .collection('plants')
    .doc('menuPlants')
    .get();
  return menuData;
};

api.getPlantAttributes = async () => {
  const plantAttrs = await db
    .collection('plants')
    .doc('plantAttrs')
    .get();
  return plantAttrs;
};

api.getPlantInfo = async () => {
  const plantInfo = await db
    .collection('plants')
    .doc('plantInfo')
    .get();
  return plantInfo;
};

api.setShopplingList = async (shoppingList) => {
  const { uid } = firebase.auth().currentUser;
  await db
    .collection('userCollection')
    .doc(uid)
    .set({ shoppingList });
};

api.getShopplingList = async () => {
  const { uid } = firebase.auth().currentUser;

  const shoppingListGet = await db
    .collection('userCollection')
    .doc(uid)
    .get()
    .then(list => list.data().shoppingList);
  return shoppingListGet;
};

api.userSignIn = async (email, password) => {
  const signIn = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return signIn;
};

api.userSignUp = async (email, password) => {
  const signUp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return signUp;
};

export default api;
