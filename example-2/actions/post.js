const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post,
    }
}

module.exports = {
    addPost,
}