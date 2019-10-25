// function that handles taking info from promise, iterates over the array, and invokes displayNationalParksToDom for each park.
const handleAPISearch = () => {
    searchAPI()
        .then(response => {
            response.forEach(response => {
                displayNationalParksToDom(response)
            })
        })
}

const borderFunction = () => {
    searchAPI()
        .then(response => {
            console.log(response)
            let parkObject = document.querySelectorAll(".parkObject")
            response.forEach(response => {
            if (response.visited === false) {
                parkObject.classList.remove(".parkVisited")
            } else {
                parkObject.classList.add(".parkNotVisited")
            }
        })
        })

}

// If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.