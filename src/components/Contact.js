import React from "react";

const Contact = ({ contact }) => {
    const nomStyle = {
        
        color: 'white', 
        fontWeight: 'bold' 
      };
  return (
    <div className="card border-success mb-3" >
      <div className="card-body   rounded text-center">
      <h5 className="card-title bg-danger rounded ">
          <span style={nomStyle}>{contact.nom} {contact.prenom}</span>
        </h5>
        <p className="card-text">{contact.tel}</p>
        <p className="card-text">{contact.email}</p>
      </div>
    </div>
  );
};

export default Contact;
