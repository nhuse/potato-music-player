import React, {useEffect} from "react";
import './Login.js'
import axios from "axios"

function SearchBar({ accessToken, searchInput, onSearchChange, setSearchResponse }) {

    useEffect(() => {
        if(searchInput === "") return setSearchResponse([]) // default null state 
        if(!accessToken) return null // prevent no accesstoken error
        const params = {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ` + accessToken       
        }
      }
        searchCall()
        function searchCall() {
          fetch(`https://api.spotify.com/v1/search?q=bob&type=album`, params)
          .then(res =>res.json())
          .then(data => console.log(data))
        }
    },[searchInput, accessToken]) // will run if search or accessToken change

  return (
    <div className="search">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a Song..."
        value={searchInput}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;