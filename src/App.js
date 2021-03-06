import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import './app.css';

function App() {
  return (
    <Root>
      <div className='content'>
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
