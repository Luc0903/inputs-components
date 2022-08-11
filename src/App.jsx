import { useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className=' flex'>
      <Sidebar />
      <Inputs />
    </div>
  );
}

export default App;
