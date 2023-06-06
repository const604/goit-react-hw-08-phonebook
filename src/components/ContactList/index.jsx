import React from 'react';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return getFilterContacts().map(({ name, phone, id }) => (
    <ContactItem key={id} id={id} name={name} phone={phone} />
  ));
};

export default ContactList;
