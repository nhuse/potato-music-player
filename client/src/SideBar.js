import { useState, useEffect } from 'react'
import './SideBar.css'
import { DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import axios from 'axios'

export default function SideBar({ accessToken, handleGenreChange, currentGenre }) {
    const [genreList, setGenreList] = useState(null)

    useEffect(() => {
        if(accessToken) {
            axios.get('https://api.spotify.com/v1/browse/categories?limit=6', {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ` + accessToken
                }
            })
            .then(resp => setGenreList(resp))
            .catch(error => console.log(error))
        }
    }, [accessToken])
    
    console.log(genreList)

    

    if(genreList){
        return (
            <>
                <DropdownButton className="genre-wrapper" onSelect={handleGenreChange} size="lg" title={currentGenre}>
                        <DropdownItem eventKey="Category">Categories</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[0].id}>{genreList.data.categories.items[0].name}</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[1].id}>{genreList.data.categories.items[1].name}</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[2].id}>{genreList.data.categories.items[2].name}</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[3].id}>{genreList.data.categories.items[3].name}</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[4].id}>{genreList.data.categories.items[4].name}</DropdownItem>
                        <DropdownItem eventKey={genreList.data.categories.items[5].id}>{genreList.data.categories.items[5].name}</DropdownItem>
                </DropdownButton>
                <div className="recently-played">
    
                </div>
            </>
        )
    }
    return null;
}