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
    .get().then((res) => { console.log(res.data()); });
  return shoppingListGet;
};
export default api;
