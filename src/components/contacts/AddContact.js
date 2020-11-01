import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

//import { CREATE_CONTACT } from "../../constant/types";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: uuidv4(),
      name: name,
      phone: phone,
      email: email,
    };
    //console.log(name, phone, email);
    dispatch(addContact(new_contact));
    history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="card border-0 shadow">
          <div className="row">
            <div class="card-header col-6">
              <h4>Add a Contact</h4>
            </div>
          </div>

          <div className="row">
            <div class="card-body col-12">
              <form onSubmit={(e) => createContact(e)}>
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
                <button className="btn btn-primary" type="submit">
                  Create Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
