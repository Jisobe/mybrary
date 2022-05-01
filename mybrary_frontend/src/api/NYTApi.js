import axios from 'axios';
import apiHelpers from './apiHelpers';

const BASE_URL = 'https://api.nytimes.com/svc/books/v3'

const NYTAPI = {}

NYTAPI.getBestSellers = async () => {
  let key = process.env.REACT_APP_API_KEY
  return await apiHelpers.tryCatchFetch(() => axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=3lTOXujmm5uA8wkEPAqeei8sbCHuo8S8'))
};

export default NYTAPI