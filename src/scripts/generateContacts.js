import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
};

generateContacts(5).catch((error) => console.error(error));