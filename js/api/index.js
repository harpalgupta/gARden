import { firebase } from '../../config/index';

const db = firebase.firestore();
const api = {};

api.getMenuItems = async () => {
  const menuData = await db.collection('plants').get();
  return menuData;
};

export default api;
