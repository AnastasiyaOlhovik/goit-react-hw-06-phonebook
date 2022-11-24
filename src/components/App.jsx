import "../components/App.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";


function App() {
  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contants</h2>

      <Filter />

      <ContactsList

      ></ContactsList>


    </>
  );

}

export default App;