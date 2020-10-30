import React from "react";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";

const Contact = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  console.log(contacts);
  return (
    <div className="container">
      <div className="py-4">
        <h2>Contact List.</h2>
        <table className="table shadow">
          <thead className="bg-success text-white">
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label"></label>
                </div>
              </th>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                  </div>
                </td>
                <td>{contact.id}</td>
                <td>
                  <Avatar
                    className="mr-2"
                    name={contact.name}
                    size="45"
                    round={true}
                  />
                  {contact.name}
                </td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td className="actions">
                  <a href="#">
                    <span className="material-icons mr-2">edit</span>
                  </a>
                  <a href="#">
                    <span className="material-icons text-danger">
                      remove_circle
                    </span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
