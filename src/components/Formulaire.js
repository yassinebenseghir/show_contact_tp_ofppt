import React, { useState } from "react";
import ListContacts from "./ListContacts";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const list = [
  { matricule: 1, prenom: 'ayoub', nom: 'hajj', tel: '0655443322', email: 'hajj@gmail.com' },
  { matricule: 2, prenom: 'yassine', nom: 'venom', tel: '0609433220', email: 'venom@gmail.com' },
  { matricule: 3, prenom: 'don', nom: 'venom', tel: '0609433220', email: 'venom@gmail.com' },
];

export const Formulaire = () => {
  const [matricule, setMatricule] = useState();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState();
  const [mail, setMail] = useState('');
  const [contacts, setContacts] = useState(list);

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newContact = {
      matricule: matricule,
      nom: nom,
      prenom: prenom,
      tel: tel,
      email: mail,
    };

    setContacts([...contacts, newContact]);

    setMatricule(0);
    setNom('');
    setPrenom('');
    setTel(0);
    setMail('');
  };

  return (
    <div className="container mt-4 border border-warning  border-4 p-4">
        <h1> Entrer les données d'un nouveau contact :</h1>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Matricule:</label>
          <input className="form-control" type="number" value={matricule} onChange={handleMatriculeChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Nom:</label>
          <input className="form-control" type="text" value={nom} onChange={handleNomChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Prénom:</label>
          <input className="form-control" type="text" value={prenom} onChange={handlePrenomChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Téléphone:</label>
          <input className="form-control" type="tel" value={tel} onChange={handleTelChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input className="form-control" type="email" value={mail} onChange={handleMailChange} />
        </div>

        <button className="btn btn-primary form-control" type="submit">Envoyer</button>
      </form>
      <div className="container mt-4 border border-warning  border-4 p-4">
        <ListContacts contacts={contacts} />
      </div>
    </div>
  );
};
