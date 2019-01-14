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

export default api;
