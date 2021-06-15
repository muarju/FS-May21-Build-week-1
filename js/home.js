const displayCards = ( selector, spotifyData, card) => {

    const htmlEl = document.querySelector( selector )
    htmlEl.innerHTML = ""

    spotifyData.forEach( spotify => htmlEl.innerHTML += card( spotify ))
}

export default displayCards