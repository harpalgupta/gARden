const utils = {};

utils.getNumfrom65to90 = () => Math.floor(Math.random() * (91 - 65 + 1) + 65);

utils.checkUniqueID = () => {};

utils.createID = () => {
  let newID = '';
  for (let i = 0; i < 5; i += 1) {
    const randomBinary = Math.round(Math.random());
    if (randomBinary === 1) {
      const randomLetter = String.fromCharCode(utils.getNumfrom65to90());
      newID = `${newID}${randomLetter}`;
    } else {
      const randomNum = Math.round(Math.random() * 10);
      newID = `${newID}${randomNum}`;
    }
  }
  return newID;
};

module.exports = utils;
