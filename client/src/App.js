import React from 'react';
import { Title } from './components/Title';
// import { GreetingList } from './components/GreetingList';
// import { AddGreeting } from './components/AddGreeting';
// import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  
  return (
    <>
    {/* If I ever add backend for sending fun public messages, that's what these comments are */}
    {/* <GlobalProvider> */}
    <div id="main">
      <Title />
      
        
        {/* <GreetingList />
        <AddGreeting /> */}
    </div>
    {/* </GlobalProvider> */}
    </>
  );
}

export default App;
