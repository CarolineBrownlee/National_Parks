// function that handles taking info from promise, iterates over the array, and invokes displayNationalParksToDom for each park.
const handleAPISearch = () => {
    searchAPI()
        .then(response => {
            response.forEach(response => {
                displayNationalParksToDom(response)
            })
        })
}
