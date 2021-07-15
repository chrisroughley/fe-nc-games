import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://house-of-games-app.herokuapp.com/api',
});

export const getCategories = () => {
  return gamesApi.get('/categories').then((response) => {
    return response.data.categories;
  });
};

export const getReviews = (query) => {
  return gamesApi
    .get(query ? `/reviews?sort_by=${query}` : '/reviews')
    .then((response) => {
      return response.data.reviews;
    });
};

export const getReviewsByCategory = (category, query) => {
  console.log(query);
  return gamesApi
    .get(
      query
        ? `/reviews?category=${category}&sort_by=${query}`
        : `/reviews?category=${category}`
    )
    .then((response) => {
      return response.data.reviews;
    });
};

export const getReviewById = (reviewId) => {
  return axios
    .get(`https://house-of-games-app.herokuapp.com/api/reviews/${reviewId}`)
    .then((response) => {
      return response.data.review;
    });
};

export const getReviewComments = (reviewId) => {
  return axios
    .get(
      `https://house-of-games-app.herokuapp.com/api/reviews/${reviewId}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};

export const getUsers = () => {
  return axios
    .get(`https://house-of-games-app.herokuapp.com/api/users`)
    .then((response) => {
      return response.data.users;
    });
};

export const postComment = (reviewId, requestBody) => {
  return axios
    .post(
      `https://house-of-games-app.herokuapp.com/api/reviews/${reviewId}/comments`,
      requestBody
    )
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (commentId) => {
  return axios
    .delete(
      `https://house-of-games-app.herokuapp.com/api/comments/${commentId}`
    )
    .then((response) => {
      return response.data.deletedComment;
    });
};

export const patchReview = (reviewId) => {
  return axios
    .patch(`https://house-of-games-app.herokuapp.com/api/reviews/${reviewId}`, {
      inc_votes: 1,
    })
    .then((response) => {
      return response.data.review;
    });
};

export const patchComment = (commentId) => {
  return axios
    .patch(
      `https://house-of-games-app.herokuapp.com/api/comments/${commentId}`,
      {
        inc_votes: 1,
      }
    )
    .then((response) => {
      return response.data.comment;
    });
};
