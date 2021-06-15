import displayCards from './home.js';
import { spotifyDataLarge } from './data/spotifyDataLarge.js'


const goodMorningData = spotifyDataLarge.filter(spotifyData => 
    spotifyData.tag === "goodMorning"
)

const cardGoodMorning = spotify => `
                                        <div ">
                                            <img src=${ spotify.img } alt="...">    
                                            <h5 >    ${ spotify.title } </h5>
                                        </div>
                                    `
displayCards(".good-morning-cards", goodMorningData, cardGoodMorning )
