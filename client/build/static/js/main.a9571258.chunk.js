(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(34),i=c.n(s),l=(c(51),c(4)),o=(c(23),c(52),c(87)),r=(c(53),c.p+"static/media/spotify-logo.a05ad32d.png"),j=c(1);function u(){var e="https://accounts.spotify.com/authorize?client_id=".concat("d464d95ff32b4e2aa6de17a36668212d","&response_type=token&redirect_uri=").concat("http://localhost:3000/dashboard","&scope=streaming%20user-read-email%20user-read-private%20playlist-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state");return Object(j.jsx)("div",{className:"login-component",children:Object(j.jsxs)(o.a,{className:"d-flex flex-column justify-content-center align-items-center",style:{minHeight:"94vh"},children:[Object(j.jsx)("img",{className:"login-logo",src:r,alt:"spotify logo"}),Object(j.jsx)("a",{className:"btn btn-success btn-lg",href:e,children:"Login With Spotify"})]})})}var d=c(14),b=c(9),p=c.n(b);c(73);var h=function(e){var t=e.playlist,c=t.id,a=t.name,n=t.tracks,s=t.images,i=e.handlePlaylistClick,l="";return l=0===s.length?"https://www.pngall.com/wp-content/uploads/2016/04/Compact-Disk-Download-PNG.png":s[0].url,Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"playlist-info",onClick:function(){i(c)},children:[Object(j.jsx)("img",{src:l,className:"playlist-img"}),Object(j.jsx)("h5",{children:a}),Object(j.jsxs)("p",{children:[n.total," Songs"]})]})})};c(74);var m=function(e){var t=e.playlists,c=e.handlePlaylistClick;return Object(j.jsx)("div",{className:"playlist-flex-container",children:t.map((function(e){return Object(j.jsx)(h,{playlist:e,handlePlaylistClick:c},e.id)}))})};function f(e){var t=e.accessToken,c=e.genrePlaylists,n=e.handlePlaylistClick,s=Object(a.useState)([]),i=Object(l.a)(s,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){t&&p.a.get("https://api.spotify.com/v1/browse/featured-playlists?limit=12",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){return r(e.data.playlists.items)})).catch((function(e){return console.log(e)}))}),[t]),t?c.length>0?Object(j.jsx)(m,{handlePlaylistClick:n,playlists:c}):Object(j.jsx)(m,{playlists:o,handlePlaylistClick:n}):null}c(32);var g=c.p+"static/media/cd.2caffa81.png";function O(e){var t=e.accessToken,c=e.handleGenreChange,n=e.recentlyPlayedTrack,s=e.chooseTrack,i=Object(a.useState)(null),o=Object(l.a)(i,2),r=o[0],u=o[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1];return Object(a.useEffect)((function(){t&&(p.a.get("https://api.spotify.com/v1/browse/categories?limit=5",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){return u(e)})).catch((function(e){return console.log(e)})),p.a.get("https://api.spotify.com/v1/me",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){return m(e.data.images[0].url)})).catch((function(e){return console.log(e)})))}),[t]),r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"genre-ul-title",children:"Genres"}),Object(j.jsxs)("ul",{className:"genre-ul",children:[Object(j.jsxs)("li",{className:"genre-li-container",id:"user-library",onClick:function(){return c("")},children:[Object(j.jsx)("img",{className:"genre-li-img",src:h}),Object(j.jsx)("span",{className:"genre-li-span",children:Object(j.jsx)("p",{children:"Your Library"})})]}),r.data.categories.items.map((function(e){return Object(j.jsxs)("li",{className:"genre-li-container",onClick:function(){return c(e.id)},children:[Object(j.jsx)("img",{className:"genre-li-img",src:e.icons[0].url}),Object(j.jsx)("span",{className:"genre-li-span",children:Object(j.jsx)("p",{children:e.name})})]},e.id)}))]}),Object(j.jsx)("h3",{children:"Recently Played"}),Object(j.jsx)("ul",{className:"recently-played-ul",children:n.map((function(e){return Object(j.jsxs)("li",{className:"recently-played-li-container",onClick:function(){s(e.track.uri,e)},children:[Object(j.jsx)("img",{src:0===e.track.album.images[0].length?g:e.track.album.images[0].url,className:"recent-img"}),Object(j.jsxs)("div",{className:"most-recent-info",children:[Object(j.jsx)("p",{className:"most-recent-name",children:e.track.name}),Object(j.jsx)("p",{className:"most-recent-artist-name",children:e.track.artists[0].name})]})]},e.track.id)}))})]}):null}var x=c(45);function y(e){var t=e.accessToken,c=e.trackUri,n=e.songURIs,s=e.offset,i=Object(a.useState)(!1),o=Object(l.a)(i,2),r=o[0],u=o[1];return Object(a.useEffect)((function(){console.log(c),console.log(s),u(!0)}),[c]),t?Object(j.jsx)(x.a,{token:t,showSaveIcon:!0,autoPlay:!0,play:r,initialVolume:.5,uris:n,offset:s,styles:{activeColor:"#fff",bgColor:"#333",color:"#fff",loaderColor:"#fff",sliderColor:"#1cb954",trackArtistColor:"#ccc",trackNameColor:"#fff"}}):null}c(33);function k(e){var t=e.song,c=e.chooseTrack,a=e.index,n=t.track,s="";return s=0==n.album.images.length?"https://www.pngall.com/wp-content/uploads/2016/04/Compact-Disk-Download-PNG.png":n.album.images[0].url,Object(j.jsxs)("li",{className:"song-li-container",onClick:function(){c(n.uri,t,a)},children:[Object(j.jsx)("div",{className:"album-img",children:Object(j.jsx)("img",{src:s,className:"album-cover"})}),Object(j.jsxs)("div",{className:"song-info",children:[Object(j.jsx)("p",{className:"song-name",children:n.name}),Object(j.jsx)("p",{className:"artist-name",children:n.artists[0].name})]}),Object(j.jsx)("div",{className:"album-name",children:Object(j.jsx)("p",{className:"album-name-p",children:n.album.name})}),Object(j.jsx)("div",{className:"time",children:Object(j.jsx)("p",{className:"time-p",children:function(e){var t=Math.floor(e/6e4),c=(e%6e4/1e3).toFixed(0);return 60==c?t+1+":00":t+":"+(c<10?"0":"")+c}(n.duration_ms)})})]})}function v(e){var t=e.songList,c=e.chooseTrack;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"song-ul",children:t.map((function(e,t){return e.is_local?void 0:Object(j.jsx)(k,{song:e,index:t,chooseTrack:c},e.track.id)}))})})}var N=c(2);function C(e){var t=e.accessToken,c=Object(a.useState)([]),n=Object(l.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(null),r=Object(l.a)(o,2),u=r[0],b=r[1],h=Object(a.useState)([]),m=Object(l.a)(h,2),g=m[0],x=m[1],k=Object(a.useState)([]),C=Object(l.a)(k,2),T=C[0],S=C[1],w=Object(a.useState)(),P=Object(l.a)(w,2),A=P[0],z=P[1],B=Object(a.useState)([]),L=Object(l.a)(B,2),_=L[0],D=L[1],E=Object(a.useState)(0),U=Object(l.a)(E,2),G=U[0],I=U[1];function R(e,t,c){if(z(e),I(c),!0===function(e,t){var c;for(c=0;c<t.length;c++)if(t[c].track.id===e.track.id)return!0;return!1}(t,_)){var a=_.filter((function(e){return e.track.id!==t.track.id}));_.length>=5?D([t].concat(Object(d.a)(a.slice(0,5)))):D([t].concat(Object(d.a)(a)))}else _.length>=5?D([t].concat(Object(d.a)(_.slice(0,4)))):D([t].concat(Object(d.a)(_)))}return Object(a.useEffect)((function(){""===u?p.a.get("https://api.spotify.com/v1/me/playlists?limit=20",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){S([]),x(e.data.items)})).catch((function(e){return console.log(e)})):p.a.get("https://api.spotify.com/v1/browse/categories/".concat(u,"/playlists?limit=20"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){S([]),x(e.data.playlists.items)})).catch((function(e){return console.log(e)}))}),[u]),t?Object(j.jsxs)("div",{className:"dashboard",children:[Object(j.jsx)("aside",{className:"side-bar",children:Object(j.jsx)(O,{accessToken:t,handleGenreChange:function(e){b(e)},recentlyPlayedTrack:_,chooseTrack:R})}),Object(j.jsx)("div",{className:"playlist-song-container",children:0===T.length?Object(j.jsx)(f,{accessToken:t,genrePlaylists:g,handlePlaylistClick:function(e){p.a.get("https://api.spotify.com/v1/playlists/".concat(e,"/tracks?market=US"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){var t=e.data.items.filter((function(e){return!e.is_local}));console.log(t);var c=t.map((function(e){return e.track.uri}));console.log(c),S(t),i(c)})).catch((function(e){return console.log(e)}))}}):Object(j.jsx)(v,{songList:T,chooseTrack:R})}),Object(j.jsx)("div",{className:"player-container",children:A?Object(j.jsx)(y,{accessToken:t,trackUri:A,offset:G,songURIs:s}):null})]}):Object(j.jsx)(N.a,{to:"/login"})}var T=c(10),S=(c(84),c.p+"static/media/potato.35e51a62.png"),w={width:"100px",padding:"12px",margin:"0 6px 6px",background:"#00f000",textDecoration:"none",color:"rgba(255,255,255,.87)"};var P=function(e){var t=e.accessToken,c=e.setAccessToken,a=Object(N.g)();return Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)(T.b,{to:"/dashboard",exact:!0,style:w,activeStyle:{background:"#1db954"},children:"Dashboard"}),t?Object(j.jsx)(T.b,{onClick:function(){c(null),a.push("/login")},to:"/",style:w,activeStyle:{background:"#1db954"},children:"Logout"}):Object(j.jsx)(T.b,{to:"/login",exact:!0,style:w,activeStyle:{background:"#1db954"},children:"Login"}),Object(j.jsx)("img",{src:S,alt:"potato",id:"potato-img"})]})},A=new URLSearchParams(window.location.hash.substr(1)),z=A.get("access_token");var B=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){z&&n(z)}),[z]),Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{accessToken:c,setAccessToken:n,params:A}),Object(j.jsxs)(N.d,{children:[Object(j.jsx)(N.b,{exact:!0,path:"/login",children:Object(j.jsx)(u,{})}),Object(j.jsx)(N.b,{exact:!0,path:"/dashboard",children:Object(j.jsx)(C,{accessToken:c})})]}),c?Object(j.jsx)(N.a,{to:"/dashboard"}):Object(j.jsx)(N.a,{to:"/login"})]})};i.a.render(Object(j.jsx)(T.a,{children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(N.b,{path:"/",component:B})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.a9571258.chunk.js.map