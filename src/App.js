import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Streak" animal="Bird" breed="Cockatiel" />
      <Pet name="Shadow" animal="Cat" breed="Black" />
    </div>
  )
};

render(React.createElement(App), document.getElementById("root"));
