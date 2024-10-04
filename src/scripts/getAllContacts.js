import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const getAllContacts = async () => {
    try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    return contacts;
    } catch (err) {
        console.error('Error getting all contacts:', err);
    }
};

console.log(await getAllContacts());