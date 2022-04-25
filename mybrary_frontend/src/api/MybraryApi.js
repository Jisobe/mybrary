import axios from 'axios';

const BASE_URL = 'http://localhost:8000/mybrary_api/'

const MybraryAPI = {}

const tryCatchFetch = async (axiosCall) => {
  try{
    const response = await axiosCall()
    return response.data ? response.data : { message: 'success' }
  }
  catch (e) {
    console.error("tryCatchFetch Error:", e.response ? e.response.data : e)
    return null
  }
};

// User methods
MybraryAPI.getAllUsers = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}users/`))
};

MybraryAPI.getUser = async (userId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}users/${userId}`))
};

MybraryAPI.updateFullUser = async (userId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}users/${userId}`))
};

MybraryAPI.updatePartialUser = async (userId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}users/${userId}`))
};

MybraryAPI.createNewUser = async (userData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}users/`, userData))
};

MybraryAPI.deleteUser = async (userId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}users/${userId}`))
};

// Library methods
MybraryAPI.getAllLibraries = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}library/`))
};

MybraryAPI.getLibrary = async (libraryId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}library/${libraryId}`))
};

MybraryAPI.updateFullLibrary = async (libraryId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}library/${libraryId}`))
};

MybraryAPI.updatePartialLibrary = async (libraryId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}library/${libraryId}`))
};


MybraryAPI.createNewLibrary = async (libraryData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}library/`, libraryData))
};

MybraryAPI.deleteLibrary = async (libraryId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}library/${libraryId}`))
};

// Wishlist methods
MybraryAPI.getAllWishlists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}wishlist/`))
};

MybraryAPI.getWishlist = async (wishlistId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}wishlist/${wishlistId}`))
};

MybraryAPI.updateFullWishlist = async (wishlistId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}wishlist/${wishlistId}`))
};

MybraryAPI.updatePartialWishlist = async (wishlistId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}wishlist/${wishlistId}`))
};


MybraryAPI.createNewWishlist = async (wishlistData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}wishlist/`, wishlistData))
};

MybraryAPI.deleteWishlist = async (wishlistId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}wishlist/${wishlistId}`))
};

// Book methods
MybraryAPI.getAllBooks = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}book/`))
};

MybraryAPI.getBook = async (bookId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}book/${bookId}`))
};

MybraryAPI.updateFullBook = async (bookId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}book/${bookId}`))
};

MybraryAPI.updatePartialBook = async (bookId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}book/${bookId}`))
};

MybraryAPI.createNewBook = async (bookData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}book/`, bookData))
};

MybraryAPI.deleteBook = async (bookId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}book/${bookId}`))
};

// Post methods
MybraryAPI.getAllPosts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}post/`))
};

MybraryAPI.getPost = async (postId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}post/${postId}`))
};

MybraryAPI.updateFullPost = async (postId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}post/${postId}`))
};

MybraryAPI.updatePartialPost = async (postId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}post/${postId}`))
};

MybraryAPI.createNewPost = async (postData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}post/`, postData))
};

MybraryAPI.deletePost = async (postId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}post/${postId}`))
};

// Comment methods
MybraryAPI.getAllComments = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}comment/`))
};

MybraryAPI.getComment = async (commentId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}comment/${commentId}`))
};

MybraryAPI.updateFullComment = async (commentId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}comment/${commentId}`))
};

MybraryAPI.updatePartialComment = async (commentId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}comment/${commentId}`))
};

MybraryAPI.createNewComment = async (commentData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}comment/`, commentData))
};

MybraryAPI.deleteComment = async (commentId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}comment/${commentId}`))
};

// Group methods
MybraryAPI.getAllGroups = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}social-group/`))
};

MybraryAPI.getGroup = async (groupId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}social-group/${groupId}`))
};

MybraryAPI.updateFullGroup = async (groupId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}social-group/${groupId}`))
};

MybraryAPI.updatePartialGroup = async (groupId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}social-group/${groupId}`))
};

MybraryAPI.createNewGroup = async (groupData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}social-group/`, groupData))
};

MybraryAPI.deleteGroup = async (groupId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}social-group/${groupId}`))
};

// Friend methods
MybraryAPI.getAllFriend = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}friend/`))
};

MybraryAPI.getFriend = async (friendId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}friend/${friendId}`))
};

MybraryAPI.updateFullFriend = async (friendId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}friend/${friendId}`))
};

MybraryAPI.updatePartialFriend = async (friendId) => {
  return await tryCatchFetch(() => axios.patch(`${BASE_URL}friend/${friendId}`))
};

MybraryAPI.createNewFriend = async (friendData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}friend/`, friendData))
};

MybraryAPI.deleteFriend = async (friendId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}friend/${friendId}`))
};


export default MybraryAPI