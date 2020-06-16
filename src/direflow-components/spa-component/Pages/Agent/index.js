import React, { useContext } from 'react';
import { EventContext } from 'direflow-component';

export default function Agent() {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new CustomEvent('my-event', { detail: 'Click from agent button' });
    dispatch(event);
  };

  return (
    <React.Fragment>
      <p>this is agent page</p>
      <button onClick={handleClick}>Agent Button</button>
    </React.Fragment>
  );
}
