import { AiFillDelete } from 'react-icons/ai';
import css from './ContactsBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button
            className={css.button_delete}
            onClick={() => handleDelete(contact.id)}
          >
            {' '}
            <AiFillDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};
