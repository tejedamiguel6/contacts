import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


//Remember if youre not storing state then you can
//make your component into a stateless component

//refactor your component if you are going to add state
class ListContacts extends Component {
  //adding proptypes to a class
  static ppropsTypes = {
      contacts: PropTypes.array.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    }

  state = {
    query: ''
  }

//creating a method to update
//query when you type in the
//form
updateQuery = (query) => {
  this.setState(() => ({
    query: query.trim()
  }))
}

clearQuery = () => {
  this.updateQuery('')
}

  render () {
    //destructuring
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props

    const showingContacts = query === ''
    ? contacts
    : contacts.filter((c) => (
      c.name.toLowerCase().includes(query.toLowerCase())
    ))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search for Contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          <Link
            to='/create'
            className='add-contact'
            >Add Contact
          </Link>


        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>
                Show all
            </button>
          </div>
        )}
        <ol className='contact-list'>
            {showingContacts.map ((contact)=> (
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
                  onClick={() => onDeleteContact(contact)}
                  className='contact-remove'>
                  REMOVE
                </button>

              </li>
            ))}

        </ol>


      </div>


    )
  }
}

export default ListContacts;
