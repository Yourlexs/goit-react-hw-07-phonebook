import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    id: uuidv4(),
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

export default {
  addContact,
  deleteContact,
  changeFilter,
};
