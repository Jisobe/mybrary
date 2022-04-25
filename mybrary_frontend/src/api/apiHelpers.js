//this is only required for a separate project setup

const apiHelpers = {}

import Cookie from "js-cookie"

// added for authentication
apiHelpers.getCsrfConfig = () => {
  return { 
    withCredentials: true, 
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

apiHelpers.tryCatchFetch = async (axiosCall) => {
  try{
    const response = await axiosCall()
    return response.data ? response.data : { message: 'success' }
  }
  catch (e) {
    console.error("tryCatchFetch Error:", e.response ? e.response.data : e)
    return null
  }
};

// in MybraryApi.js 

// import apiHelpers from './apiHelpers'

// ToDoAPI.getAllTaskLists = async () => {
//   return await apiHelpers.tryCatchFetch(
//     () => axios.get(`${BASE_URL}/task-lists/`, apiHelpers.getCsrfConfig())) // sending config
// }

// // need to add `apiHelpers.getCsrfConfig()` to the end of the axios call for the token