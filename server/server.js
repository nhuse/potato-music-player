const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'd464d95ff32b4e2aa6de17a36668212d',
        clientSecret: '037673e8da7a47b4bcee71140629dc5f'
    })
    spotifyApi.authorizeCodeGrant(code).then(data => {
        res.json({
            accessToke: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)