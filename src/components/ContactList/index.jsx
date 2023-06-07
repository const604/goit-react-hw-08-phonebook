import React from 'react';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/operations';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  // const items = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return getFilterContacts().map(({ name, phone, id }) => (
    <ContactItem key={id} id={id} name={name} phone={phone} />
  ));
};

export default ContactList;
