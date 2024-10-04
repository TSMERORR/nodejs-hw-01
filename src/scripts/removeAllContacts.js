import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const data = await fs.writeFile(PATH_DB, JSON.stringify([], undefined, 2));
        return data;
    } catch (err) {
        console.error('Error removing all contacts:', err);
    }
};

removeAllContacts();