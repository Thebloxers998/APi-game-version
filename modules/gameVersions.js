let gameVersions = [];

const getAllVersions = () => {
  return gameVersions;
};

const addVersion = (newVersion) => {
  gameVersions.push(newVersion);
  return newVersion;
};

const deleteVersion = (id) => {
  gameVersions = gameVersions.filter(version => version.id !== id);
};

module.exports = {
  getAllVersions,
  addVersion,
  deleteVersion
};
