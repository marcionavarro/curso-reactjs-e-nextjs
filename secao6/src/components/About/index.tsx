import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>About</h1>
      <p>{state}</p>
    </div>
  )
}