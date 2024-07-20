import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchPosts, loadPosts, recountVotes } from '../actions/posts';

import { changePage } from '../actions/sort';

import './css/_PostList.css';

const PostList = ({ error, fetchPosts, loadPosts, pages, posts, sort, currentPage, changePage }) => {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    fetchPosts({ page: currentPage })
  }, [currentPage, fetchPosts]);

  const getPosts = (page) => {
    changePage(page, sort);
    fetchPosts({ page: page, sort: sort.sort });
  };

  if (error) {
    return (
      <div className="postList">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="postList">
      <div className="posts">
        {posts.map((post, i) => {
          const date = new Date(post.created).toLocaleDateString('en-US');
          return (
            <div className="post" key={i}>
              <div className="votes">{post.votes}</div>
              <div className="words">
                <div className="title">{post.title}</div>
                <div className="details">{post.details}</div>
              </div>
              <div className="dateWrapper">
                <div className="date">{date}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pages">
        {[...Array(pages).keys()].map((i) => {
          const page = i + 1;
          return (
            <div className="page" key={i} onClick={() => getPosts(page)}>
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  ({ posts, sort }) => ({
    error: posts.error,
    pages: posts.pages,
    posts: posts.posts,
    currentPage: posts.currentPage,
    sort,
  }),
  (dispatch) => ({
    fetchPosts: (params) => {
      dispatch(fetchPosts(params));
      return dispatch(recountVotes());
    },
    loadPosts: () => dispatch(loadPosts()),
    changePage: (page) => dispatch(changePage(page))
  })
)(PostList);
