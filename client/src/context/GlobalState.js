import React, {createContext, useReducer} from 'react';
import AppReducer from './Reducer';
//make http requests with axios
// import axios from 'axios';
// Initial state
// const initialState = {
//     greetings: [],
//     error: null
// }

// Initial state to be exported to other files
export const GlobalContext = createContext(initialState);

// Global component
export const GlobalProvider = ({children}) => {
    // dispatch helps manage async queue
    const [state, dispatch] = useReducer(AppReducer, initialState);

  const addGreeting = async (t) => {
    const {text, name} = t;
    try{
    // posting with axios
    // https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
    const postAction = await axios.post('/api/zach/greetings', {
      text: text,
      name: name,
    }, {headers:{'Content-Type': 'application/json'}});
    // grabs full opbject
    const fullData = postAction.data;
    const data = fullData.data;
    //dispatch invoked when async action is completed
    dispatch({
      type: 'add',
      payload: data
    });
  }
  catch (e){
    //dispatch invoked when async action is completed
    dispatch({
      type: 'error',
      payload: e.error
    });
  }
  }

  const getGreetings = async () => {
    try{
    const response = await axios.get('/api/zach/greetings');
    // gives full object
    const fullData = response.data;
    const data = fullData.data;

    dispatch({
      type: 'get_all',
      payload: data
    });
  }
  catch (e){
    dispatch({
      type: 'error',
      payload: e.error
    });
  }
  }

  return (<GlobalContext.Provider value={{
    greetings: state.greetings,
    error: state.error,
    getGreetings,
    addGreeting
  }}>
    {children}
  </GlobalContext.Provider>);
}