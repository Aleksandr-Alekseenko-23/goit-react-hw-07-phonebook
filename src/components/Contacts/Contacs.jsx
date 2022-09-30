import React, { useEffect } from 'react';
import { List, Wrapper, Item, Span, Button, Img } from './Contacs.styled.js';
import Avatar from 'react-avatar';
import Delete from './../../Assets/img/Delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from '../../redux/usersOperations';
import {
  getUsers,
  getUsersFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';

function Contacs() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getUsers);
  const filter = useSelector(getUsersFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filterContactsFunction = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      {isLoading && contacts.length === 0 ? (
        <h1>LOADING..</h1>
      ) : (
        <List>
          {filterContactsFunction().map(({ name, number, id }) => {
            return (
              <Item key={id}>
                <Avatar size="25" name={name} round={true} />
                {name}:<Span>{number}</Span>
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContacts(id));
                  }}
                >
                  <Img src={Delete} alt="Delete" />
                </Button>
              </Item>
            );
          })}
        </List>
      )}
      {error && <p>{error}</p>}
    </Wrapper>
  );
}

export default Contacs;
