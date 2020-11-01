import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import {
  deleteContact,
  selectAllContact,
  clearAllContact,
  deleteSelectedContact,
} from "../../actions/contactAction";

const Contact = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContacts = useSelector(
    (state) => state.contact.selectedContacts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-6">
            <h4>Contact List.</h4>
            {selectedContacts > 0 ? (
              <button
                className="btn btn-danger mb-3"
                onClick={() => dispatch(deleteSelectedContact())}
              >
                delete all
              </button>
            ) : null}
          </div>
          <div className="col-6 pull-right">
            <Link className="btn btn-primary" to="/contacts/add">
              Add Contact
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table shadow">
              <thead className="bg-success text-white">
                <tr>
                  <th>
                    <div className="custom-control custom-checkbox">
                      <input
                        id="selectAll"
                        type="checkbox"
                        className="custom-control-input"
                        value={selectAll}
                        onClick={() => setSelectAll(!selectAll)}
                      />
                      <label
                        htmlFor="selectAll"
                        className="custom-control-label"
                      ></label>
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
                  <tr key={contact.id}>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          checked={selectAll}
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="selectAll"
                          className="custom-control-label"
                        ></label>
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
                      <Link to={`/contacts/edit/${contact.id}`}>
                        <span className="material-icons mr-2">edit</span>
                      </Link>
                      <Link>
                        <span
                          className="material-icons text-danger"
                          onClick={() => dispatch(deleteContact(contact.id))}
                        >
                          remove_circle
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
