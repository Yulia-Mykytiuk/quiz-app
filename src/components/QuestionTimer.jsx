import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [ timeLeft, setTimeLeft ] = useState(timeout);

  useEffect(() => {
    const timeoutValue = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutValue);
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, []);
  
  return (
    <progress id="question-time" max={timeout} value={timeLeft} className={mode}/>
  )
}