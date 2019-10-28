// function that displays park information on the dom when called in eventManager.js


const displayNationalParksToDom = (response => {
    const nationalParksHtml = `
    <article class="parkObject">
    <h3>${response.name}</h3>
    <p>${response.state}</p>
    </article>
    `
    // grabs id of main container on dom and inputs nationalParksHtml
    const nationalParksContainer = document.querySelector("#mainContainer")
    nationalParksContainer.innerHTML += nationalParksHtml 
    if (response.visited === false) {
        console.log(response)
        // whatever changes border on false objects
    } 
    if (response.visited === true) {
        //  whatever changes border on true objects
    }
})    




  
//    // 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

// const classPropertyChange = document.querySelectorAll(".article__header");
// console.log(classPropertyChange);

// classPropertyChange.forEach((currentNode) => currentNode.classList.add("important"))

// // 3. Obtain a reference the element with a class of dashed and remove it.

// document.querySelector(".dashed").classList.remove("dashed")

// // 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

// document.querySelector(".article__footer").classList.add("goldenrod");
    