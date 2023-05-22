import { Component } from 'react';
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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storage = localStorage.getItem(LS_KEY);
    if (storage) {
      this.setState({ contacts: JSON.parse(storage) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }, resetForm) => {
    if (this.checkDuplicateName(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    resetForm();
  };

  checkDuplicateName = nameContact => {
    const { contacts } = this.state;
    return contacts.some(({ name }) => name === nameContact);
  };

  deleteContact = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idContact),
    }));
  };

  filterChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  filterReset = () => {
    this.setState({
      filter: '',
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <PhoneBook>
          <Wrapper>
            <TitlePrime>Phonebook</TitlePrime>
            <ContactForm onAddContact={this.addContact} />
          </Wrapper>

          <Wrapper>
            <TitleSecond>Contacts</TitleSecond>
            <Filter
              onFilterChange={this.filterChange}
              onFilterReset={this.filterReset}
              value={filter}
            />
          </Wrapper>
          {contacts.length !== 0 && (
            <ContactList
              contacts={this.filterContacts()}
              onDeleteContact={this.deleteContact}
            />
          )}
        </PhoneBook>
      </Container>
    );
  }
}

export default App;
