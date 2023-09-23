import Form from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className={css.global_wrapper}>
      <Form />
      <Filter />
      <ContactsList />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
