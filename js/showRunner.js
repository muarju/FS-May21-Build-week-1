import displayCards from './home.js';
import { spotifyDataLarge } from './data/spotifyDataLarge.js'


const goodMorningData = spotifyDataLarge.filter(spotifyData => 
    spotifyData.tag === "goodMorning"
)

//! ------------------------------------< Good Morning Section >-------------------------------------------
const cardGoodMorning = spotify => `
                                        <div ">
                                            <img src=${ spotify.img } alt="...">    
                                            <h5 >    ${ spotify.title } </h5>
                                        </div>
                                    `
displayCards(".good-morning-cards", goodMorningData, cardGoodMorning )





const card = spotify =>`
<div >
    <img src=${ spotify.img } alt="...">
    <h5 > ${ spotify.title } </h5>
    <p ><small>Last updated </small></p>
</div>
` 

//! ------------------------------------< Recently played Section >-------------------------------------------

displayCards(

    ".recently-played-cards" 
    , spotifyDataLarge.filter( spotifyData => spotifyData.tag === "recentlyPlayed" ) 
    , card
)

//! ------------------------------------< Shows to try Section >-------------------------------------------

displayCards(

    ".show-to-try" 
    , spotifyDataLarge.filter( spotifyData => spotifyData.tag === "showToTry" ) 
    , card
)