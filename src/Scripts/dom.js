// function that displays park information on the dom when called in eventManager.js
const displayNationalParksToDom = (response => {
    console.log(response)
    // declare a variable that holds classname and 
    // write conditional that would set value 
    // 
    const nationalParksHtml = `
    <article>
        <h3>${response.name}</h3>
        <p>${response.state}</p>
    </article>
    `
    // grabs id of main container on dom and inputs nationalParksHtml
    const nationalParksContainer = document.querySelector("#mainContainer")
    nationalParksContainer.innerHTML += nationalParksHtml
})
