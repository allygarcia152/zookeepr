const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
router.use(require('./zookeeperRoutes'));

router.use(animalRoutes);

module.exports = router;