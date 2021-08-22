import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.description}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteTodo(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
