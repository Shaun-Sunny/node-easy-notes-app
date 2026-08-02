const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    tags: {
        type: [String],
        default: [],
        index: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);