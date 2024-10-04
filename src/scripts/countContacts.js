import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
        return contacts.length;
    } catch (err) {
        console.error('Abra cadabra, something went wrong', err);
    }
};

console.log(await countContacts());