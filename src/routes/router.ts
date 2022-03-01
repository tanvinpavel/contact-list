import express from 'express';
import { deleteContactHandler, editContact, getAllContact, getContactById, storeContact } from '../handler/contactHandler';

const route = express.Router();

route.get('/', getAllContact);
route.get('/:id', getContactById);
route.post('/store', storeContact);
route.put('/edit', editContact);
route.delete('/remove/:id', deleteContactHandler);

export {route};