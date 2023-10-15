import { ContactForm } from 'components/ContactsBook/ContactForm';
import { ContactList } from 'components/ContactsBook/ContactList';
import { SearchFilter } from 'components/ContactsBook/SearchFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <SearchFilter />
      <ContactList />
    </>
  );
}
