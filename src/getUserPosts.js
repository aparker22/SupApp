
let getUserPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
}

let getUserInformation = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
}

let getData = {getUserPosts: getUserPosts, getUserInformation: getUserInformation}

export default getData;
