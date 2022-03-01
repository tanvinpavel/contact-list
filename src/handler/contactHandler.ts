import { Request, Response } from 'express';
import databases from '../database/contact';

const getAllContact = (req: Request, res: Response) => {
    const result = databases.getAllContacts();
    res.send(result);
}

const getContactById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = databases.getContactById(id);
    res.send(result);
}

const storeContact = (req: Request, res: Response) => {
    const payload = req.body;
    const data = databases.getAllContacts();
    payload.id = data.length+1;
    //set
    const result = databases.setContact(payload);
    res.send(`${result} no contact added successfully!`);
}

const editContact = (req: Request, res: Response) => {
    const id = req.body.id;
    
    databases.updateContact(id, req.body);
    res.send(`${id} no contact update successfully!`);
}

const deleteContactHandler = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    databases.deleteContact(id);
    res.send(`${id} no contact delete successfully!`);
}

export {getAllContact, storeContact, editContact, getContactById, deleteContactHandler};