import axios from 'axios';
import apiHelpers from './apiHelpers';

const BASE_URL = 'http://localhost:8000/mybrary_api/'

const MybraryAPI = {}

// User methods
MybraryAPI.getAllUsers = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}users/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getUser = async (userId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}users/${userId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullUser = async (userId, userData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}users/${userId}/`, userData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialUser = async (userId, userData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}users/${userId}/`, userData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewUser = async (signupData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteUser = async (userId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}users/${userId}`, apiHelpers.getCsrfConfig()))
};

// Library methods
MybraryAPI.getAllLibraries = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}library/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getLibrary = async (libraryId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}library/${libraryId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullLibrary = async (libraryId, libraryData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}library/${libraryId}/`, libraryData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialLibrary = async (libraryId, libraryData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}library/${libraryId}/`, libraryData, apiHelpers.getCsrfConfig()))
};


MybraryAPI.createNewLibrary = async (libraryData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}library/`, libraryData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteLibrary = async (libraryId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}library/${libraryId}`, apiHelpers.getCsrfConfig()))
};

// Wishlist methods
MybraryAPI.getAllWishlists = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}wishlist/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getWishlist = async (wishlistId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}wishlist/${wishlistId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullWishlist = async (wishlistId, wishlistData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}wishlist/${wishlistId}/`, wishlistData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialWishlist = async (wishlistId, wishlistData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}wishlist/${wishlistId}/`, wishlistData, apiHelpers.getCsrfConfig()))
};


MybraryAPI.createNewWishlist = async (wishlistData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}wishlist/`, wishlistData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteWishlist = async (wishlistId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}wishlist/${wishlistId}`, apiHelpers.getCsrfConfig()))
};

// Book methods
MybraryAPI.getAllBooks = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}book/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getBook = async (bookId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}book/${bookId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullBook = async (bookId, bookData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}book/${bookId}/`, bookData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialBook = async (bookId, bookData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}book/${bookId}/`, bookData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewBook = async (bookData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}book/`, bookData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteBook = async (bookId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}book/${bookId}`, apiHelpers.getCsrfConfig()))
};

// Post methods
MybraryAPI.getAllPosts = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}post/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getPost = async (postId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}post/${postId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullPost = async (postId, postData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}post/${postId}/`, postData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialPost = async (postId, postData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}post/${postId}/`, postData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewPost = async (postData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}post/`, postData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deletePost = async (postId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}post/${postId}`, apiHelpers.getCsrfConfig()))
};

// Comment methods
MybraryAPI.getAllComments = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}comment/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getComment = async (commentId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}comment/${commentId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullComment = async (commentId, commentData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}comment/${commentId}/`, commentData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialComment = async (commentId, commentData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}comment/${commentId}/`, commentData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewComment = async (commentData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}comment/`, commentData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteComment = async (commentId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}comment/${commentId}`, apiHelpers.getCsrfConfig()))
};

// Group methods
MybraryAPI.getAllGroups = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}social-group/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getGroup = async (groupId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}social-group/${groupId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullGroup = async (groupId, groupData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}social-group/${groupId}/`, groupData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialGroup = async (groupId, groupData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}social-group/${groupId}/`, groupData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewGroup = async (groupData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}social-group/`, groupData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteGroup = async (groupId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}social-group/${groupId}`, apiHelpers.getCsrfConfig()))
};

// Friend methods
MybraryAPI.getAllFriend = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}friend/`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.getFriend = async (friendId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}friend/${friendId}`, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updateFullFriend = async (friendId, friendData) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}friend/${friendId}/`, friendData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.updatePartialFriend = async (friendId, friendData) => {
  return await apiHelpers.tryCatchFetch(() => axios.patch(`${BASE_URL}friend/${friendId}/`, friendData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.createNewFriend = async (friendData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}friend/`, friendData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.deleteFriend = async (friendId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}friend/${friendId}`, apiHelpers.getCsrfConfig()))
};

//Authentication

MybraryAPI.loginUser = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig()))
};

MybraryAPI.logoutUser = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}logout/`, null, apiHelpers.getCsrfConfig()))
};


export default MybraryAPI