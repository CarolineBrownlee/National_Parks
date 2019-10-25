// function that handles taking info from promise, iterates over the array, and invokes displayNationalParksToDom for each park.
const handleAPISearch = () => {
    searchAPI()
    .then(response => {
        response.forEach(response => {
            displayNationalParksToDom(response)
        })
     })
}
handleAPISearch()

// If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.


