import {useState,useEffect} from 'react'
import Form from '../Form/Form'
import List from "./List/List"
import "./styles.css"
const Contacts = () => {
  const [contacts,setContacts]=useState([]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts