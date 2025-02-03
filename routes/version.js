const express = require('express');
const router = express.Router();
const { getAllVersions, addVersion, deleteVersion } = require('../modules/gameVersions');

// Get all game versions
router.get('/', (req, res) => {
  res.json(getAllVersions());
});

// Add a new game version
router.post('/', (req, res) => {
  const newVersion = req.body;
  res.status(201).json(addVersion(newVersion));
});

// Delete a game version
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  deleteVersion(id);
  res.status(204).send();
});

module.exports = router;
