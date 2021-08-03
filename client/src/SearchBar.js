import React, {useState, useEffect} from "react";
import './Login.js'
// import SpotifyWebAPI from 'spotify-web-api-node' // this actually works from the browser
import axios from "axios"
// import fetch from "fetch"

function SearchBar({ accessToken, searchInput, onSearchChange, setSearchResponse }) {
    console.log(accessToken)
    // const spotifyAPI = new SpotifyWebAPI({
    //     clientId: "d464d95ff32b4e2aa6de17a36668212d",
    // })

    useEffect(() => {
        console.log('search fetch called')
        if(searchInput === "") return setSearchResponse([]) // default null state 
        if(!accessToken) return null // prevent no accesstoken error
        console.log('search still here')
        let searchURL = `https://api.spotify.com/v1/search?q=bob%20year:2014&type=album`
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
          console.log('searchCall here')
          fetch(`https://api.spotify.com/v1/search?q=bob&type=album`, params)
            .then(res =>res.json())
            .then(data => console.log(data))
        }

        // axios.get(, {
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ` + accessToken
        //     }
        //     })
        // .then(res => {
        //         console.log('search fetch res')
        //         console.log(res)
        //     })
    },[searchInput, accessToken]) // will run if search or accessToken change

    // useEffect(() => {
    //     if(currentGenre !== "Category"){
    //         axios.get(`https://api.spotify.com/v1/browse/categories/${currentGenre}/playlists?limit=12`, {
    //         headers: {
                // "Accept": "application/json",
                // "Content-Type": "application/json",
                // Authorization: `Bearer ` + accessToken
    //         }
    //         })
    //         .then(resp => setGenrePlaylists(resp.data.playlists.items))
    //         .catch((error) => console.log(error))
    //     }else{
    //         setGenrePlaylists([])
    //     }
    // }, [currentGenre])

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