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



//! ------------------------------------< Recently played Section >-------------------------------------------

const card = spotify =>`
<div >
    <img src=${ spotify.img } alt="...">
    <h5 > ${ spotify.title } </h5>
    <p ><small>Last updated </small></p>
</div>
` 

displayCards(

    ".recently-played-cards" 
    , spotifyDataLarge.filter( spotifyData => spotifyData.tag === "recentlyPlayed" ) 
    , card
)