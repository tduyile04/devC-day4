import * as types from '../constants';

const commentReducer = (state = [], action) => {
  if (action.type === types.ADD_COMMENT) {
    return [...state, {
      author: action.author,
      comment: action.comment
    }]
  }
  return state;
}

export default commentReducer;