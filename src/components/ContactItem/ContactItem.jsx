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

export default ContactItem;
