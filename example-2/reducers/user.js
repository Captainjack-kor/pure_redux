const initState = {
    isLogIn: false,
    user: null,
}

const userReducer = (prevState = initState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return {
                isLogIn: true,
                user: action.data,
            };
        case 'LOG_OUT':
            return {
                isLogIn: false,
                user: null,
            };
        default:
            return prevState;
    }
}

module.exports = userReducer;