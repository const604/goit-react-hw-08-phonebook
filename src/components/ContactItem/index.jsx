import React from 'react';
import { Item, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/operations';
// import { deleteContact } from 'redux/operations';
// import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, result] = useDeleteContactMutation();

  // const dispatch = useDispatch();
  const handleDelete = () => deleteContact(id);
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {phone}
      <Button type="button" onClick={handleDelete} disabled={result.isLoading}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
