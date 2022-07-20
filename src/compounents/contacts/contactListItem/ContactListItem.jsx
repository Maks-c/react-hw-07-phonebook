import React from 'react';

import { SpanItem } from '../../../styles/Contacts-List-Item.styled';

import { useDeleteContactMutation } from '../../redux/contacts';
import { Button, Item } from '../../../styles/contacts.styled';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <SpanItem>{name}</SpanItem>
      <SpanItem>{number}</SpanItem>
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

export default ContactListItem;
