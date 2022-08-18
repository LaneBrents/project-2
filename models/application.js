const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        content: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        userName: String,
    },
    {
        timestamps: true,
    }
);


const updateSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    dateApplied: {
        type: Date,
        required: true,
    },
    stat: {
        type: String,
        required: true,
    },
});

const applicationSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    dateApplied: {
        type: Date,
        required: true,
    },
    stat: {
        type: String,
        required: true,
    },
    notes: [noteSchema],
    update: [updateSchema],
});

module.exports = mongoose.model('Application', applicationSchema);