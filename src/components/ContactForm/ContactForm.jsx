import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, InputContact, Button } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInputName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeInputNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onAddContact({ name, number }, resetForm);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <InputContact
        type="text"
        name="name"
        value={name}
        onChange={handleChangeInputName}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <InputContact
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeInputNumber}
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button>Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
