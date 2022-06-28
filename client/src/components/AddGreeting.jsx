import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddGreeting = () => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    const { addGreeting } = useContext(GlobalContext);
  
    const onSubmit = (e) => {
      e.preventDefault();
      //add a comment within component
      addGreeting({
        // arbitrary id number
        id: Math.floor(Math.random()*69696969),
        name,
        text
      });
    }

    const textChange = e => {
      setText(e.target.value)
    }
    const nameChange = e => {
      setName(e.target.value)
    }

    return (
    <>
    <h3>Drop a message</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">From</label>
            <input type="text" value={name} onChange={nameChange} placeholder="Your name.." />
        </div>
        <div className="form-control">
          <label htmlFor="text">Content</label>
          <input type="text" value={text} onChange={textChange} placeholder="Hello!" />
        </div>
        <button className="btn">Send</button>
      </form>
    </>
  )
}
