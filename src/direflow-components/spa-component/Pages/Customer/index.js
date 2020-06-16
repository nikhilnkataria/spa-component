import React, { useContext } from 'react';
import { EventContext } from 'direflow-component';

export default function Customer() {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new CustomEvent('my-event', { detail: 'Click from customer button' });
    dispatch(event);
  };

  return (
    <React.Fragment>
      <p>this is customer page</p>
      <button onClick={handleClick}>Customer Button</button>
    </React.Fragment>
  );
}
