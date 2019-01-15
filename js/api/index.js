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

export default api;
