import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Container,
  PhoneBook,
  Wrapper,
  TitlePrime,
  TitleSecond,
} from './App.styled';

const LS_KEY = 'my_contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }, resetForm) => {
    if (checkDuplicateName(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);

    resetForm();
  };

  const checkDuplicateName = nameContact => {
    return contacts.some(({ name }) => name === nameContact);
  };

  const deleteContact = idContact => {
    setContacts(prev => prev.filter(({ id }) => id !== idContact));
  };

  const filterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterReset = () => {
    setFilter('');
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <PhoneBook>
        <Wrapper>
          <TitlePrime>Phonebook</TitlePrime>
          <ContactForm onAddContact={addContact} />
        </Wrapper>

        <Wrapper>
          <TitleSecond>Contacts</TitleSecond>
          <Filter
            onFilterChange={filterChange}
            onFilterReset={filterReset}
            value={filter}
          />
        </Wrapper>
        {contacts.length !== 0 && (
          <ContactList
            contacts={filterContacts()}
            onDeleteContact={deleteContact}
          />
        )}
      </PhoneBook>
    </Container>
  );
};

export default App;
