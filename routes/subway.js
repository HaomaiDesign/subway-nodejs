
const { Router } = require('express');

const { subwayStatus,
        subwayArriveTime } = require('../controllers/subway');

const router = Router();

router.get('/', subwayStatus );
router.get('/:station', subwayArriveTime );

module.exports = router;