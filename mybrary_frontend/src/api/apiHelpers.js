import Cookie from "js-cookie"

const apiHelpers = {}

// added for authentication
apiHelpers.getCsrfConfig = () => {
  return { 
    withCredentials: true, // this is only required for a separate project setup
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

export default apiHelpers