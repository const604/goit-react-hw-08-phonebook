import React from 'react';
import { Item, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, phone }) => {

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {phone}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
