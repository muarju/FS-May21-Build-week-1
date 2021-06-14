import { spotifyData } from './spotifyData.js'

const goodMorningCards = document.querySelector(".good-moring-cards")

goodMorningCards.innerHTML =""

spotifyData.forEach ( spotify => {

    const { img, title } = spotify

    goodMorningCards.innerHTML 
        +=`
            <div ">
                <img src=${ img } alt="...">
                <h5 class="card-title"> ${ title } </h5>
            </div>
        `
})