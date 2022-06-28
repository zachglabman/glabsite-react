import React, {useContext} from 'react';

export const Greeting = ({ greeting }) => {
    const from = greeting.name;
    const content = greeting.text;

    return (
    <li className="greeting">
          <b>{from}</b>: {content}
        </li>
  )
}
