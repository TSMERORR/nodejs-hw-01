import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Successfully removed the last contact.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();