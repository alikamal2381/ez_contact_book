import React, { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import Contact from "../contacts/Contact";
import User from "../users/User";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    //loadUsers();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h2>Welcome to Dashboard.</h2>
      </div>
    </div>
  );
};

export default Home;
