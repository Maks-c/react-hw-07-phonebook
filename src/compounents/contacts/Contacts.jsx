import React from 'react';
import ContactListItem from './contactListItem';
import { List } from '../../styles/contacts.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/contacts';


const Contacts = () => {
  const { data } = useGetContactsQuery();
  const inputValue = useSelector(state => state.filter.value);
  const searchName = data?.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <List>
      {searchName && searchName.map(contacts => {
        return <ContactListItem key={contacts.id} id={contacts.id} name={contacts.name} number={contacts.number} />;
      })}
    </List>);
};

export default Contacts;
