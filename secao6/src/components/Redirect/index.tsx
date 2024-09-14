import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time, setTime] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setTime(t => t - 1)
    }, 1000)

    if (time <= 0) {
      navigate('/about');
    }

    return () => {
      clearTimeout(timeout.current);
    }
  }, [time, navigate])

  return <div><h1>Get ou of here in: {time}</h1></div>
}