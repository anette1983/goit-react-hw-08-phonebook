import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/Button.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';

function ContactsItem({ contact }) {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = id => {
    setDelId(id);
    dispatch(deleteContact(id));
    return toast.success(`Contact deleted successfully`);
  };

  return (
    <StyledItem>
      <div>
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
      </div>
      <StyledButton
        type="button"
        onClick={() => handleDelete(contact.id)}
        disabled={delId === contact.id}
      >
        {delId === contact.id ? 'Deleting...' : 'Delete'}
      </StyledButton>
    </StyledItem>
  );
}
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsItem;
