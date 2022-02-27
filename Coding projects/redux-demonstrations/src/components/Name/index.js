import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from '../../actions/userActions';

const Name = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" value={name} name="name" onChange={evt => setName(evt.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" value={age} name="age" onChange={evt => setAge(evt.target.value)} />
      </div>
      <button onClick={() => dispatch(changeUser(name, age))}>Dispatch user</button>
    </>
  );
};

export default Name;