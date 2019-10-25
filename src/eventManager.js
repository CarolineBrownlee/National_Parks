// const handleEventbriteSearch = () => {
//     const inputField = document.querySelector("#eventbriteInput")
//     console.log(inputField)
//     searchEventbrite(inputField.value)
//     // promise
//     .then(response => {
//       console.log(response)
//       response.events.forEach(event => {
//           console.log(event)
//           displayEventbriteResultsHtml(event)
//           inputField.value = ""
//       });
//     })
// } 

const handleAPISearch = () => {
    searchAPI()
    .then(response => {
        console.log(response)
        response.forEach(response => {
            displayNationalParksToDom(response)
        })
     })
}
handleAPISearch()

// If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.


