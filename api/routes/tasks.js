const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /tasks'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /tasks'
    });
});

// router.get('/:taskId', (req, res, next) => {
//     const id = req.params.taskId;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'You discovered the special ID',
//             id: id
//         });
//     } else {
//         res.status(200).json({
//             message: 'You passed an ID'
//         });
//     }
// });

router.patch('/:taskId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated task'
    });
});

router.delete('/:taskId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted task'
    });
});

module.exports = router;