// API Fetch

const baseUrlAPI = "http://localhost:8088/parks"

const searchAPI = () => {
    return fetch(`${baseUrlAPI}`)
    .then(r => r.json())
}


