import { get } from '../utils/AJAX';

export const PostsError = 'canny/posts/error';
function postError(error) {
  return {
    error,
    timestamp: Date.now(),
    type: PostsError,
  };
}

export const PostsLoaded = 'canny/posts/loaded';
function postsLoaded(posts, pages, sort) {
  return {
    pages,
    posts,
    timestamp: Date.now(),
    type: PostsLoaded,
    sort,
  };
}

export const RecountVotes = 'canny/posts/recount';
export function recountVotes(posts, pages) {
  return {
    type: RecountVotes,
  };
}

export const ChangePage = 'canny/posts/change_page';
export function changePage(page) {
  return {
    page,
    type: ChangePage,
  };
}

export function fetchPosts(params) {
  return async (dispatch, getState) => {
    const { error, pages, posts, sort } = await get('/api/posts/get', params);
    if (error) {
      return dispatch(postError(error));
    }
    dispatch(postsLoaded(posts, pages, sort));
    dispatch(recountVotes(posts, pages));
  };
}

export function loadPosts() {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    return dispatch(recountVotes());
  };
}
