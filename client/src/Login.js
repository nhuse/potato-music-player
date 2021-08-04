import React from 'react'
import { Container } from "react-bootstrap"

const client_ID = "d464d95ff32b4e2aa6de17a36668212d" //public
const redirect_URI = "http://localhost:3000/dashboard"

export default function Login() {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=token&redirect_uri=${redirect_URI}&scope=streaming%20user-read-email%20user-read-private%20playlist-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

    return (
        <Container
            className="d-flex justify-content-center align-items-center" // boostrap css
            style={{minHeight: "100vh"}}>
                <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
        </Container>
    )
}