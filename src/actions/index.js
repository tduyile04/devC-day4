// ADD_COMMENTS
// LIKE_IMAGES
import * as types from '../constants';

export const addComment = (author, comment) => ({
  type: types.ADD_COMMENT,
  author,
  comment
});
