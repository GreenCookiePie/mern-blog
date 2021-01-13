import { combineReducers } from 'redux'

const postsReducer = (posts=[], action) => {
    switch (action.type) {
        case 'CREATE':
            return posts.push(action.input)
        case 'GET':
            return action.posts
        case 'UPDATE':
            return posts.map((post) => (post._id === action.update._id ? action.update : post))
        case 'DELETE':
            return posts.filter((post) => post._id !== action.delete._id)
        default:
            return posts
    }
}

export const rootReducer = combineReducers({
    postsR: postsReducer
})