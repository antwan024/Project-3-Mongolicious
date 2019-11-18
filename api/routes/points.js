const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Points were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Points were created'
    });
});


router.get('/:pointsId', (req, res, next) => {
    res.status(200).json({
        message: 'Points details',
        pointsId: req.params.pointsId
    });
});

router.delete('/:pointsId', (req, res, next) => {
    res.status(200).json({
        message: 'Points deleted',
        pointsId: req.params.pointsId
    });
});

module.exports = router;