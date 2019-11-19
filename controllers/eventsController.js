const db = require("../models");

// Defining methods for the eventsController
module.exports = {
    findAll: function(req, res) {
        db.Event
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Event
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userEvent: function(req, res) {
        db.UserEvent
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addPoints: function(req, res) {
        db.Event
            .find(req.query)
            .aggregate(
                { $match: {
                    _id: "foo"
                }},
            
                { $project: {
                    _id: 1,
                    total: { $add: ["$eventPoints"] }
                }}
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
