import { useState } from 'react';
import { Form, Button, Input } from './ContactForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import {
  addContact,
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/operations';

export default function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  // const items = useSelector(selectContacts);
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`) || reset()
      : addContact({
          name: form.elements.name.value,
          phone: form.elements.phone.value,
        }) &&
        // dispatch(
        //     addContact({
        //       name: form.elements.name.value,
        //       phone: form.elements.phone.value,
        //     })
        // )
        reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name <br />
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number <br />
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Sign up as {name}</Button>
    </Form>
  );
}
