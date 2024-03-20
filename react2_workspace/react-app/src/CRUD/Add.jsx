import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    Name: "",
    Age: ""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/new_table", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Record</h1>
      <input
        type="text"
        placeholder="Name"
        name="Name"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Technology"
        name="Age"
        onChange={handleChange}
      />
     
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all Records</Link>
    </div>
  );
};

export default Add;