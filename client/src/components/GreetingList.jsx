import React, { useContext, useEffect } from 'react';
import { Greeting } from './Greeting.jsx';

import { GlobalContext } from '../context/GlobalState.js';

export const greetingList = () => {
  //bringing context in from global state allows us to use anything in component
  const { greetings, getGreetings} = useContext(GlobalContext);
  
  // runs only once at beginning
  // from w3 schools lesson
  useEffect(() => {
    getGreetings();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <h3>Visitor Logbook</h3>
      <ul className="list">
        {greetings.map(greeting => (<Greeting key={greeting.id} greeting={greeting} />))}
      </ul>
      </>
  )
}