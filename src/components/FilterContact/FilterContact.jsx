import React from 'react';
import { InputPhoneBook, LabelPhoneBook } from './FilterContact.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersFilter } from '../../redux/selectors';
import { filterUsers } from 'redux/filtersSlice.js';

function FilterContact() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getUsersFilter);
  const handleFilterChange = ({ target: { value } }) =>
    dispatch(filterUsers(value));
  return (
    <div>
      <LabelPhoneBook>
        Find contacts by name
        <InputPhoneBook
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filterValue || ''}
          onChange={handleFilterChange}
          placeholder="Name"
        />
      </LabelPhoneBook>
    </div>
  );
}

export default FilterContact;
