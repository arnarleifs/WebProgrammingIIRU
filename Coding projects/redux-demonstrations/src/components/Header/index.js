import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector(state => state.counter);
  const { name, age } = useSelector(state => state.user);
  const currentDegree = useSelector(state => state.weather);

  return (
    <nav className="navigation-bar">
      <div>Counter is: {counter}</div>
      {name ? <div>Display name: {name}</div> : <></>}
      {age ? <div>Age: {age}</div> : <></>}
      {
        currentDegree === 0
        ?
        <></>
        :
        <div>The current degree in Reykjavik is: {currentDegree}°C</div>
      }
    </nav>
  );
}

export default Header;