import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';

import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        className={styles.input}
      ></input>
    </label>
  );
};

export default Filter;
