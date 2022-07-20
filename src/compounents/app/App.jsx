import Form from '../form';
import Contacts from '../contacts';
import Filter from '../filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AppWrapper, MainHead } from '../../styles/app.Styled';

const App = () => {
  return (
    <AppWrapper>
      <MainHead>Phonebook</MainHead>
      <Form />
      <h2>Contacts</h2>
      <Contacts />
      <Filter />
      <ToastContainer theme='colored' autoClose={500} />
    </AppWrapper>
  );
};

export default App;
