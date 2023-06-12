import React from 'react';
import { Container, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <Container>
      <label>Find contacts by name</label>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Container>
  );
};

export default Filter;
