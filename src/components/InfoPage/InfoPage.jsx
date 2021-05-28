import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Technologies used to build this app:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material UI</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Postico</li>
        <li>PostgreSQL</li>
        <li>SQL</li>
        <li>JSON</li>
      </ul>
    </div>
  );
}

export default InfoPage;
