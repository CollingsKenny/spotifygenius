import React from 'react';
import { Root, Routes } from 'react-static';
import { Link, Router } from '@reach/router';

import './app.css';

function App() {
  return (
    <Root>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <div>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
