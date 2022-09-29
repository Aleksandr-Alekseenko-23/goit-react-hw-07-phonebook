import React from 'react';
import { List, Wrapper, Item, Span, Button, Img } from './Contacs.styled.js';
import Avatar from 'react-avatar';
import Delete from './../../Assets/img/Delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../../redux/userSlice';
import { getUsers, getUsersFilter } from '../../redux/selectors';

function Contacs() {
  const dispatch = useDispatch();
  const contacts = useSelector(getUsers);
  const filterContacts = useSelector(getUsersFilter);
  const filterContactsFunction = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <List>
        {filterContactsFunction().map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <Avatar size="25" name={name} round={true} />
              {name}:<Span>{number}</Span>
              <Button
                type="button"
                onClick={() => {
                  dispatch(deleteUsers(id));
                }}
              >
                <Img src={Delete} alt="Delete" />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default Contacs;
