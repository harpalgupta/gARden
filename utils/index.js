const utils = {};

utils.getNumfrom65to90 = () => Math.floor(Math.random() * (91 - 65 + 1) + 65);

utils.createUniqueID = () => {
  const letter = String.fromCharCode(utils.getNumfrom65to90());
  return letter;
};
//  65 - 90 upper
//  97 - 122 lower

//  0.1 * 650
//  0.9* 91

module.exports = utils;
