import { spotifyDataLarge } from './data/spotifyDataLarge.js'
import { displayCards, filterData } from './home.js';

//! ------------------------------------< Good Morning Section >-------------------------------------------
const cardGoodMorning = spotify => `
                                        <div ">
                                            <img src=${ spotify.img } alt="...">    
                                            <h5 >    ${ spotify.title } </h5>
                                        </div>
                                    `

displayCards(

    ".good-morning-cards"                        ,
    filterData( "goodMorning", spotifyDataLarge ),
    cardGoodMorning 
) 
//* END -- Good Morning Section
//! ------------------------------------< Card for the next sections >-------------------------------------
const card = spotify =>`
                            <div >
                                <img src=${ spotify.img } alt="...">
                                <h5 > ${ spotify.title } </h5>
                                <p ><small>Last updated </small></p>
                            </div>
                        ` 

//! ------------------------------------< Recently played Section >----------------------------------------

displayCards(

    ".recently-played-cards"                        ,
    filterData( "recentlyPlayed", spotifyDataLarge ),
    card
)
//* END -- Recently played Section
//! ------------------------------------< Shows to try Section >-------------------------------------------
    
displayCards(

    ".show-to-try" ,
    filterData( "showToTry", spotifyDataLarge ),
    card
)
//* END -- Shows to try Section