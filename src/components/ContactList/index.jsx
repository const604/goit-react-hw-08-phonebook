import React from 'react';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { Container } from './ContactList.styled';

const ContactList = () => {
  const items = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      {getFilterContacts().map(({ name, number, id }) => (
        <ContactItem key={id} id={id} name={name} phone={number} />
      ))}
    </Container>
  );
};

export default ContactList;
