const filterData = ( data, dataList ) => dataList.filter( spotifyData => spotifyData.tag === data ) 









const displayCards = ( selector, spotifyData, card) => {

    const htmlEl = document.querySelector( selector )
    htmlEl.innerHTML = ""

    spotifyData.forEach( spotify => htmlEl.innerHTML += card( spotify ))
}





export { displayCards, filterData }
