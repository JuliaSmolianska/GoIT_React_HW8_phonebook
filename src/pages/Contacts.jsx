import { ContactForm } from 'components/ContactsBook/ContactForm';
import { ContactList } from 'components/ContactsBook/ContactList';
import { SearchFilter } from 'components/ContactsBook/SearchFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={11} lg={4}>
          <ContactForm />
          <div>{isLoading && 'Request in progress...'}</div>
          <SearchFilter />
        </Col>
        <Col xs={11} lg={4}>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}
