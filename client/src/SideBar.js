import { useState, useEffect } from 'react'
import './SideBar.css'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import axios from 'axios'

export default function SideBar({ accessToken, handleGenreChange }) {
    const [genreList, setGenreList] = useState(null)

    useEffect(() => { 
        axios.get('https://api.spotify.com/v1/browse/categories?limit=6', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ` + accessToken
            }
        })
        .then(resp => setGenreList(resp))
        .catch(error => console.log(error))
    }, [accessToken])

    console.log(genreList)

    if(genreList){
        return (
            <>
                <Dropdown className="genre-wrapper" onSelect={handleGenreChange}>
                    <Dropdown.Toggle variant="success">
                        Categories
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <DropdownItem eventKey="option-1">{genreList.data.categories.items[0].name}</DropdownItem>
                        <DropdownItem eventKey="option-2">{genreList.data.categories.items[1].name}</DropdownItem>
                        <DropdownItem eventKey="option-3">{genreList.data.categories.items[2].name}</DropdownItem>
                        <DropdownItem eventKey="option-4">{genreList.data.categories.items[3].name}</DropdownItem>
                        <DropdownItem eventKey="option-5">{genreList.data.categories.items[4].name}</DropdownItem>
                        <DropdownItem eventKey="option-6">{genreList.data.categories.items[5].name}</DropdownItem>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="recently-played">
    
                </div>
            </>
        )
    }
    return null;
}