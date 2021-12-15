const { createStore } = require('redux');

// 초기 state를 정의
const initState = {
    name: '김코딩',
    posts: []
}

// action
// 객체를 리턴하는 action creator 함수를 작성
const changeUsername = (data) => {
    return {
        type: 'CHANGE_NAME',
        data
    }
}

const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}

// reducer
// action 의 타입에 따라서 새로운 state를 생성해내는 순수 함수
const reducer = (prevState, action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...prevState,
                name: action.data
            }
        
        case 'ADD_POST':
            return {
                ...prevState,
                posts: [...prevState.posts, action.post]
            }
        
        default:
            return prevState
    }
}

// store
const store = createStore(reducer, initState)

// dispatch
store.dispatch(changeUsername('코드스테이츠'))
store.dispatch(addPost('post 1'))
store.dispatch(addPost('post 2'))

console.log(store.getState());