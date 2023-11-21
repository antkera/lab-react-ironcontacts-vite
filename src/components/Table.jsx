import { useState } from "react";
import contacts from "../contacts.json";
export default function Table() {
    
//     const ToSetContactArr = [...contacts].splice(0,5)
//     // contacts.splice(0, 5)
//   const [contactsArr, setContacts] = useState(ToSetContactArr);
  //   const [contactsArr, setContacts] = useState([]);
  //   const [contactsArr, setContacts] = useState(contacts.splice(0,5));
  console.log(contactsArr, contacts)
  const deleteContact = (id) => {
    setContacts(contactsArr.filter((contact) => contact.id !== id))
  }
  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const contactToAdd = contacts.splice(randomNumber, 1);
    setContacts([contactToAdd[0], ...contactsArr]);
  };
  const sortByName = () => {
    const sortedContacts = [...contactsArr.sort((a, b) => a.name.localeCompare(b.name))]
    setContacts(sortedContacts);
    console.log(sortedContacts)
  };
  const sortByPop = () => {
    const sortedContacts = [...contactsArr.sort((a, b) => b.popularity - a.popularity)]
    setContacts(sortedContacts);
    console.log(sortedContacts)

  };
  return (
    
    <div id="tablas">
      <div id="buttons">
        <button  onClick={handleRandom}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPop}>Sort by popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture </th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contactsArr.map((eachContact) => {
            return (
              <tr key={eachContact.id}>
                <td>
                  <img src={eachContact.pictureUrl} alt={eachContact.name} />
                </td>

                <td className="textTable">{eachContact.name}</td>

                <td className="textTable">{eachContact.popularity}</td>
                <td className="textTable">{eachContact.wonOscar && "🏆"}</td>
                <td className="textTable">{eachContact.wonEmmy && "🌟"}</td>
                <td className="textTable"><button onClick={() => {deleteContact(eachContact.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
