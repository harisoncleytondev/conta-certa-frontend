import { useEffect, useState } from 'react';

export const Streaming = ({ resetTime, time, repeat, fullText, ...props }) => {
  const [text, setText] = useState('');
  const [full, setFullText] = useState(fullText);

  useEffect(() => {
    let timer;
    let index = 0;
    let conc = '';

    timer = setInterval(() => {
      if (index < full.length) {
        conc += full.charAt(index);
        setText(conc);
        index++;
      } else if (repeat) {
        setTimeout(() => {
          index = 0;
          conc = '';
        }, resetTime);
      } else {
        return clearInterval(timer);
      }
    }, time);
  }, []);

  return <p {...props}>{text}</p>;
};
