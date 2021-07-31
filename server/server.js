const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: 'd464d95ff32b4e2aa6de17a36668212d',
        clientSecret: '037673e8da7a47b4bcee71140629dc5f',
        refreshToken
    })


    spotifyApi.refreshAccessToken().then(
        (data) => {        
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        }
    )
    .catch((error) => {
        console.log(error)
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: 'd464d95ff32b4e2aa6de17a36668212d',
        clientSecret: '037673e8da7a47b4bcee71140629dc5f'
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((error) => {
        console.log(error)
        res.sendStatus(400)
    })
})

app.listen(3001)