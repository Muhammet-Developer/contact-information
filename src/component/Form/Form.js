import React, { useState } from 'react'
import "../Contacts/styles.css"
const initalFormValues = { fullname:"",phone_number:"",id:""}
function Form({addContacts,contacts}) {
  const [form,setForm] = useState(initalFormValues);

  const onChangeİnput = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if(form.fullname ==="" || form.phone_number ===""){
      alert("null cannot be entered")
      return false;
    }
    addContacts([...contacts,form])
    setForm(initalFormValues);
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="fullname" value={form.fullname} placeholder='Fullname' onChange={onChangeİnput}/>
      </div>
      <div>
        <input type="number" name="phone_number" value={form.phone_number}  placeholder='Phone Number' onChange={onChangeİnput} />
      </div>
      <button className="button-10" role="button">Add</button>
    </form>
  );
}

export default Form