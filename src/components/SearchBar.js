import React, { useState } from "react";
import styled from "styled-components";


const SearchBar = ({ onAddTeam }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTeam(searchText);
    setSearchText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search for your favorite soccer teams"
        value={searchText}
        onChange={handleChange}
      />
      <Button type="submit">Add Team</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 45px;
  padding: 5px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 250px;
`;

const Button = styled.button`
  height: 45px;
  padding: 0 10px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: darkred;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: red;
  }
`;

export default SearchBar;
