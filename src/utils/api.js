import axios from 'axios';

export const getCategories = () => {
  return axios
    .get('https://house-of-games-app.herokuapp.com/api/categories')
    .then((response) => {
      return response.data.categories;
    });
};

export const getReviews = () => {
  return axios
    .get('https://house-of-games-app.herokuapp.com/api/reviews')
    .then((response) => {
      return response.data.reviews;
    });
};

export const getReviewsByCategory = (category) => {
  return axios
    .get(
      `https://house-of-games-app.herokuapp.com/api/reviews?category=${category}`
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
