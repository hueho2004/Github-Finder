import React, {useContext } from "react";
import Users from "./Users";
import {getUsers } from "../../data/api";
import SearchContext from "../../SearchContext";
const Search = () => {
  const { text, setText, users, setUsers } = useContext(SearchContext);
  const clearUsers = () => {
    setUsers([]);
  };
  const searchUsers = async (text) => {
    try {
        const users = await getUsers(text);
        setUsers(users);
    } catch (error) {
        console.error("Get users fail", error);
    }
};
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => {
    setText(e.target.value); 
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text} 
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users
        users={users}
      />
    </div>
  );
};

export default Search;