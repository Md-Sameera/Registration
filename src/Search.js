import React, { useState } from "react";
import './App.css';

const Search = () => {
    const people = [
        { name: "Aladdin", id: 1 },
        { name: "KAvitha", id: 2 },
        { name: "Babar", id: 3 },
        { name: "sameera",id: 4 },
        {name : "raheem " , id : 5}
      ];
    
      const [search, setSearch] = useState("");
    
      const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };
    
      const filtered = !search
        ? people
        : people.filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          );
  return (
    <>
    <div className="fil">
    <h2>Searching Data</h2>
    Filter data:{" "}
    <input type="text" value={search} onChange={handleSearchChange} />
    <h2>Names present in the database:</h2>
    {filtered.map((person) => {
      return (
        <p key={person.id}>
          {person.name}
        </p>
      );
    })}
    </div>
  </>
  )
}

export default Search
