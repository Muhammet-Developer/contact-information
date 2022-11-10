import {useState} from 'react'

function List({contacts}) {
  const[filterText,setFilterText]= useState("");
  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return(
        //some fulname veya phone_number içinde --herhangibiri-- demek
        item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
  })
  console.log(filtered);
  return (
    <div>
      <input type="text" placeholder='filter concat' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
      <ul className='list'>
        {
          filtered.map((person,i)=>{
            return(
              <li key={i}>
                <span>{person.fullname}</span>
                <span>{person.phone_number}</span>
              </li>
            )
          })
        }
        <p>Total contacts ({filtered.length})</p>
      </ul>
    </div>
  )
}

export default List