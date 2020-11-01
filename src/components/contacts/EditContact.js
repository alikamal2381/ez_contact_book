import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
//import { CREATE_CONTACT } from "../../constant/types";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    //console.log(update_contact);
    dispatch(updateContact(update_contact));
    history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="card border-0 shadow">
          <div className="row">
            <div class="card-header col-6">
              <h4>Update a Contact</h4>
            </div>
          </div>

          <div className="row">
            <div class="card-body col-12">
              <form onSubmit={(e) => onUpdateContact(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="btn btn-warning" type="submit">
                  Update Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
