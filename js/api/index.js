import { firebase } from '../../config/index';

const db = firebase.firestore();
const api = {};

api.getMenuItems = async () => {
  const menuData = await db.collection('plants').get();
  return menuData;
};

api.getPlantAttributes = async (slugParam) => {
  const plantAttr = await db
    .collection('plants')
    .doc(slugParam)
    .get();
  return plantAttr;
};

api.getPlantInfo = async (slugParam) => {
  const plantInfo = await db
    .collection('plants')
    .doc(slugParam)
    .get();
  return plantInfo;
};

export default api;
