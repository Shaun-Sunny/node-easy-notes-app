module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // List all distinct tags (must be before /:noteId to avoid route conflict)
    app.get('/notes/tags', notes.findAllTags);

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes (supports ?search= and ?tag= query params)
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
};