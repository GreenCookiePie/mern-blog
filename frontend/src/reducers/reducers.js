import { combineReducers } from 'redux'

const postsReducer = (posts=[], action) => {
    switch (action.type) {
        case 'GET':
            return action.payload
        default:
            return posts
    }
}

export const rootReducer = combineReducers({
    postsR: postsReducer
})