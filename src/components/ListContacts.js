import React from "react";
import Contact from "./Contact";

const ListContacts = ({ contacts }) => {
  return (
    <div>
      <h2>List of Contacts</h2>
      <div className="row">
        {contacts.map((contact, index) => (
          <div className="col-md-4 " key={index}>
            <Contact contact={contact} />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default ListContacts;
