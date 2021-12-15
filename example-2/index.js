const { createStore } = require('redux');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');
const reducer = require('./reducers/index');

const store = createStore(reducer); // createStore(reducer, initialState, enhancer)

store.dispatch(logIn({id: 1, name: '김코딩', email: 'code@codestates.com'}));
// store.dispatch(logOut());
store.dispatch(addPost('Redux를 배웠어요!'));

console.log(store.getState());

// 화면 보여주는 메서드
// react-redux 패키지에 들어있음.
/*
store.subscribe(() => {
    console.log('changed') // 화면 보여주는 부분
})
*/