import axios from 'axios';
import apiHelpers from './apiHelpers';

const BASE_URL = 'https://openlibrary.org/'

const OpenLibraryAPI = {}

OpenLibraryAPI.getBookInfo = async (query) => {
  console.log(`${BASE_URL}search.json?q=${query}`)
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}search.json?q=${query}`))
};

export default OpenLibraryAPI