import React, {useState} from 'react';

export const Title = () => {

  const [text, setText] = useState("Hi, I'm Zach 👋");

  const titlesArray = [
    "Welcome!", "Send memes!", "Do a dance!", "How's your day?", "Say hi on Twitter!"
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const textChange = e => {
    setText(titlesArray[getRandomInt(5)]);
  }

  return (
    <h1 className="clickable" onClick={textChange}>
        {text}
    </h1>
  )
}
