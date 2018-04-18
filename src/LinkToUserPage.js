let LinkToUserPage = (event, props) => {
    event.preventDefault();
    let username=event.target.username.value;
    return props.history.push(`users/${username}`)
}

export default LinkToUserPage;