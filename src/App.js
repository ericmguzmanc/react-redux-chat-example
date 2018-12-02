import React from 'react';
import ThreadTabs from './components/ThreadTabs';
import ThreadDisplay from './components/ThreadDisplay';
import './App.css';

const App = () => (
  <div className='ui segment'>
    <ThreadTabs />
    <ThreadDisplay /> 
  </div> 
);

export default App;
