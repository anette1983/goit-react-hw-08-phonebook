import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import StyledForm from './ContactForm.styled';
import StyledButton from 'components/Button.styled';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      phone,
    };
    const normalizedName = newContact.name.toLowerCase();
    const contactsIncludes = items.find(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.phone === newContact.phone
    );
    if (contactsIncludes) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
