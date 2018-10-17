import React from 'react';


//Remember if youre not storing state then you can
//make your component into a function component
function ListContacts (props) {
  return (
    <ol className='contact-list'>
        {props.contacts.map ((contact)=> (
          <li key ={contact.id} className='contact-list-item'>
            <div className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
              ></div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>

            <button
              onClick={() => props.onDeleteContact(contact)}
              className='contact-remove'>
              REMOVE
            </button>

          </li>
        ))}

    </ol>
  )
}



export default ListContacts;
