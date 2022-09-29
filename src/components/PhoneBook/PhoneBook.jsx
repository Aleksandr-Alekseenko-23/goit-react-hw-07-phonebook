import AddForm from '../AddForm/AddForm';
import Contacs from '../Contacts/Contacs';
import FilterContact from '../FilterContact/FilterContact';
import { TitleOne, Wrapper, WrapperContact } from './PhoneBook.styled.js';

export const PhoneBook = () => {
  return (
    <>
      <TitleOne>Phonebook</TitleOne>
      <Wrapper>
        <AddForm />
        <WrapperContact>
          <FilterContact />
          <Contacs />
        </WrapperContact>
      </Wrapper>
    </>
  );
};

export default PhoneBook;
