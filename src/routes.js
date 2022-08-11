import { addNoteHandler, getAllNotesHandler, getNotedByIdHandler, editNotedByIdHandler, deleteNoteByIdHandler } from './handler.js';

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotedByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotedByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

export default routes;