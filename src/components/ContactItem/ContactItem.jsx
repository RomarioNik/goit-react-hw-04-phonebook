import PropTypes from 'prop-types';

import {
  ListItem,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  IconTrash,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>

      <Contact>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
      </Contact>

      <TrashButton onClick={() => onDeleteContact(id)}>
        <IconTrash />
      </TrashButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
