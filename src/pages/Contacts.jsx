import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </HelmetProvider>
  );
};

export default Contacts;
