import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useGetContactsQuery } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// import { useEffect } from 'react';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  // const dispatch = useDispatch();
  // const items = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList />}
      {/* {items && <ContactList />} */}
    </div>
  );
};
